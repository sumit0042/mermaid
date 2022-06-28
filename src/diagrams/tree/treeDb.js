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

let sections = {};
let treeIn = {};
let title = '';
let description = '';
let showData = false;

export const parseDirective = function (statement, context, type) {
  mermaidAPI.parseDirective(this, statement, context, type);
};

const addTreeBranch = function(section) {
  
}

const addChildSection = function(parentId, id, value) {
  parentId = parentId.trim()
  id = id.trim()
  value = value.trim()
  log.warn(parentId, id, value)
  sections = {"Rats": 100}
}

const addSection = function (id, value) {
  id = id.trim()
  value = value.trim()
  log.warn(id, value)
  sections = {"Rats": 100}
};
const getSections = () => sections;

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
