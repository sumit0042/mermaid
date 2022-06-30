/** Created by AshishJ on 11-09-2019. */
import * as d3 from 'd3';
import treeData from './treeDb';
import treeParser from './parser/tree';
import { log } from '../../logger';
import { configureSvgSize } from '../../utils';
import * as configApi from '../../config';
import addSVGAccessibilityFields from '../../accessibility';

let conf = configApi.getConfig();

function Tree(svg, data, 
  { 
  path, 
  id = Array.isArray(data) ? d => d.id : null, 
  parentId = Array.isArray(data) ? d => d.parentId : null, 
  children, 
  tree = d3.tree, 
  sort, 
  label=d => d.name, 
  title, 
  link, 
  linkTarget = "_blank", 
  width = 640, 
  height, 
  r = 3, 
  padding = 1, 
  fill = "#999", 
  stroke = "#555",
  halo = "#fff", 
  haloWidth = 3, 
} = {}) {
  
  const root = path != null ? d3.stratify().path(path)(data)
      : id != null || parentId != null ? d3.stratify().id(id).parentId(parentId)(data)
      : d3.hierarchy(data, children);
  
  if (sort != null) root.sort(sort);

  const descendants = root.descendants();
  const L = label == null ? null : descendants.map(d => label(d.data, d));

  const dx = 10;
  const dy = width / (root.height + padding);
  tree().nodeSize([dx, dy])(root);
  
  let x0 = Infinity;
  let x1 = -x0;
  root.each(d => {
    if (d.x > x1) x1 = d.x;
    if (d.x < x0) x0 = d.x;
  });
  
  if (height === undefined) height = x1 - x0 + dx * 2;
  
  svg
      .attr("viewBox", [-dy * padding / 2, x0 - dx, width, height])
      .attr("width", width)
      .attr("height", height)
      .attr("style", "max-width: 100%; height: auto; height: intrinsic;");

  svg.append("g")
      .attr("fill", "none")
      .attr('class', 'treeStrokes')
    .selectAll("path")
      .data(root.links())
      .join("path")
        .attr("d", d3.linkHorizontal()
            .x(d => d.y)
            .y(d => d.x));

  const node = svg.append("g")
    .selectAll("a")
    .data(root.descendants())
    .join("a")
      .attr("xlink:href", link == null ? null : d => link(d.data, d))
      .attr("target", link == null ? null : linkTarget)
      .attr("transform", d => `translate(${d.y},${d.x})`);

  node.append("circle")
      .attr("fill", d => d.children ? stroke : fill)
      .attr("r", r);

  if (title != null) node.append("title")
      .text(d => title(d.data, d));

  if (L) node.append("text")
      .attr("dy", "0.32em")
      .attr("x", d => d.children ? -6 : 6)
      .attr("text-anchor", d => d.children ? "end" : "start")
      .attr("paint-order", "stroke")
      .attr("stroke", halo)
      .attr("stroke-width", haloWidth)
      .attr('class',  'treeDiagram')
      .text((d, i) => L[i]);

  return svg.node();
}

/**
 * Draws a Tree with the data given in text.
 *
 * @param text
 * @param id
 */
let width;
const height = 450;
export const draw = (txt, id) => {
  try {
    conf = configApi.getConfig();
    const parser = treeParser.parser;
    parser.yy = treeData;
    log.debug('Rendering info diagram\n' + txt);

    const securityLevel = configApi.getConfig().securityLevel;
    // Handle root and ocument for when rendering in sanbox mode
    let sandboxElement;
    if (securityLevel === 'sandbox') {
      sandboxElement = d3.select('#i' + id);
    }
    const root =
      securityLevel === 'sandbox'
        ? d3.select(sandboxElement.nodes()[0].contentDocument.body)
        : d3.select('body');
    const doc = securityLevel === 'sandbox' ? sandboxElement.nodes()[0].contentDocument : document;
    
    parser.yy.clear();
    parser.parse(txt);
    treeData.buildTree();
    log.debug('Parsed info diagram');

    const diagram = root.select('#' + id);
    
    var data = treeData.getSections();

    Tree(diagram, data)

    addSVGAccessibilityFields(parser.yy, diagram, id);
        
  } catch (e) {
    log.error('Error while rendering info diagram');
    log.error(e);
  }
};

export default {
  draw,
};
