import { log } from '../../logger';
import mermaidAPI from '../../mermaidAPI';
import * as configApi from '../../config';
import common from '../common/common';
import {
  setAccTitle,
  getAccTitle,
  setDiagramTitle,
  getDiagramTitle,
  getAccDescription,
  setAccDescription,
  clear as commonClear,
} from '../../commonDb';
import { branch } from '../git/gitGraphAst';

let branches = {};
let parents = {};
let sections = {};
let dataTree = {};
let title = '';
let description = '';
let showData = false;

export const parseDirective = function (statement, context, type) {
  mermaidAPI.parseDirective(this, statement, context, type);
};

const buildTree = function() {
  let shouldMerge = {}
  while (Object.keys(branches).length > 1){
    shouldMerge = {}
    for (const key in branches) {
      if (Object.hasOwnProperty.call(branches, key)) {
        const children = branches[key];
        if (!(children.reduce((val, child)=>{
          return val | branches.hasOwnProperty(child.id)
        }, false))){
          const index = branches[parents[key]].findIndex(child => child.id==key)
          branches[parents[key]][index].children = branches[key]
          delete branches[key]
        }
      }
    }
  }
  dataTree.children = branches[dataTree.id]
}

const addChildSection = function(parentId, id, name) {
  parentId = parentId.trim()
  id = id.trim()
  name = name.trim()
  parents[id] = parentId
  if (typeof branches[parentId] === 'undefined') {
    branches[parentId] = [{id:id, name:name}]
  }
  else {
    branches[parentId] = [...branches[parentId], {id:id, name:name}]
  }
}

const addSection = function (id, value) {
  id = id.trim()
  value = value.trim()
  dataTree = {id:id, name:value}
  sections = {"Rats": 100}
};

const getSections = () => dataTree;

const setShowData = function (toggle) {
  showData = toggle;
};

const getShowData = function () {
  return showData;
};

const cleanupValue = function (value) {
  if (value.substring(0, 1) === ':') {
    value = value.substring(1).trim();
    return Number(value.trim());
  } else {
    return Number(value.trim());
  }
};

const clear = function () {
  sections = {};
  title = '';
  showData = false;
  commonClear();
};

export default {
  parseDirective,
  getConfig: () => configApi.getConfig().tree,
  buildTree,
  addChildSection,
  addSection,
  getSections,
  cleanupValue,
  clear,
  setAccTitle,
  getAccTitle,
  setDiagramTitle,
  getDiagramTitle,
  setShowData,
  getShowData,
  getAccDescription,
  setAccDescription,
};
