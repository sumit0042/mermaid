import { invert, lighten, darken, rgba, adjust } from 'khroma';
import { mkBorder } from './theme-helpers';
class Theme {
  constructor() {
    this.background = '#333';
    this.primaryColor = '#1f2020';
    this.secondaryColor = lighten(this.primaryColor, 16);

    this.tertiaryColor = adjust(this.primaryColor, { h: -160 });
    this.primaryBorderColor = invert(this.background);
    this.secondaryBorderColor = mkBorder(this.secondaryColor, this.darkMode);
    this.tertiaryBorderColor = mkBorder(this.tertiaryColor, this.darkMode);
    this.primaryTextColor = invert(this.primaryColor);
    this.secondaryTextColor = invert(this.secondaryColor);
    this.tertiaryTextColor = invert(this.tertiaryColor);
    this.lineColor = invert(this.background);
    this.textColor = invert(this.background);

    this.mainBkg = '#1f2020';
    this.secondBkg = 'calculated';
    this.mainContrastColor = 'lightgrey';
    this.darkTextColor = lighten(invert('#323D47'), 10);
    this.lineColor = 'calculated';
    this.border1 = '#81B1DB';
    this.border2 = rgba(255, 255, 255, 0.25);
    this.arrowheadColor = 'calculated';
    this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif';
    this.fontSize = '16px';
    this.labelBackground = '#181818';
    this.textColor = '#ccc';
    /* Flowchart variables */

    this.nodeBkg = 'calculated';
    this.nodeBorder = 'calculated';
    this.clusterBkg = 'calculated';
    this.clusterBorder = 'calculated';
    this.defaultLinkColor = 'calculated';
    this.titleColor = '#F9FFFE';
    this.edgeLabelBackground = 'calculated';

    /* Sequence Diagram variables */

    this.actorBorder = 'calculated';
    this.actorBkg = 'calculated';
    this.actorTextColor = 'calculated';
    this.actorLineColor = 'calculated';
    this.signalColor = 'calculated';
    this.signalTextColor = 'calculated';
    this.labelBoxBkgColor = 'calculated';
    this.labelBoxBorderColor = 'calculated';
    this.labelTextColor = 'calculated';
    this.loopTextColor = 'calculated';
    this.noteBorderColor = 'calculated';
    this.noteBkgColor = '#fff5ad';
    this.noteTextColor = 'calculated';
    this.activationBorderColor = 'calculated';
    this.activationBkgColor = 'calculated';
    this.sequenceNumberColor = 'black';

    /* Gantt chart variables */

    this.sectionBkgColor = darken('#EAE8D9', 30);
    this.altSectionBkgColor = 'calculated';
    this.sectionBkgColor2 = '#EAE8D9';
    this.taskBorderColor = rgba(255, 255, 255, 70);
    this.taskBkgColor = 'calculated';
    this.taskTextColor = 'calculated';
    this.taskTextLightColor = 'calculated';
    this.taskTextOutsideColor = 'calculated';
    this.taskTextClickableColor = '#003163';
    this.activeTaskBorderColor = rgba(255, 255, 255, 50);
    this.activeTaskBkgColor = '#81B1DB';
    this.gridColor = 'calculated';
    this.doneTaskBkgColor = 'calculated';
    this.doneTaskBorderColor = 'grey';
    this.critBorderColor = '#E83737';
    this.critBkgColor = '#E83737';
    this.taskTextDarkColor = 'calculated';
    this.todayLineColor = '#DB5757';

    /* C4 Context Diagram variables */

    this.personBorder = 'calculated';
    this.personBkg = 'calculated';

    /* state colors */
    this.labelColor = 'calculated';

    this.errorBkgColor = '#a44141';
    this.errorTextColor = '#ddd';
  }
  updateColors() {
    this.secondBkg = lighten(this.mainBkg, 16);
    this.lineColor = this.mainContrastColor;
    this.arrowheadColor = this.mainContrastColor;
    /* Flowchart variables */

    this.nodeBkg = this.mainBkg;
    this.nodeBorder = this.border1;
    this.clusterBkg = this.secondBkg;
    this.clusterBorder = this.border2;
    this.defaultLinkColor = this.lineColor;
    this.edgeLabelBackground = lighten(this.labelBackground, 25);

    /* Sequence Diagram variables */

    this.actorBorder = this.border1;
    this.actorBkg = this.mainBkg;
    this.actorTextColor = this.mainContrastColor;
    this.actorLineColor = this.mainContrastColor;
    this.signalColor = this.mainContrastColor;
    this.signalTextColor = this.mainContrastColor;
    this.labelBoxBkgColor = this.actorBkg;
    this.labelBoxBorderColor = this.actorBorder;
    this.labelTextColor = this.mainContrastColor;
    this.loopTextColor = this.mainContrastColor;
    this.noteBorderColor = this.secondaryBorderColor;
    this.noteBkgColor = this.secondBkg;
    this.noteTextColor = this.secondaryTextColor;
    this.activationBorderColor = this.border1;
    this.activationBkgColor = this.secondBkg;

    /* Gantt chart variables */

    this.altSectionBkgColor = this.background;
    this.taskBkgColor = lighten(this.mainBkg, 23);
    this.taskTextColor = this.darkTextColor;
    this.taskTextLightColor = this.mainContrastColor;
    this.taskTextOutsideColor = this.taskTextLightColor;
    this.gridColor = this.mainContrastColor;
    this.doneTaskBkgColor = this.mainContrastColor;
    this.taskTextDarkColor = this.darkTextColor;

    /* state colors */
    this.transitionColor = this.transitionColor || this.lineColor;
    this.transitionLabelColor = this.transitionLabelColor || this.textColor;
    this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor;
    this.stateBkg = this.stateBkg || this.mainBkg;
    this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg;
    this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor;
    this.altBackground = this.altBackground || '#555';
    this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg;
    this.compositeBorder = this.compositeBorder || this.nodeBorder;
    this.innerEndBackground = this.primaryBorderColor;
    this.specialStateColor = '#f4f4f4'; // this.lineColor;

    this.errorBkgColor = this.errorBkgColor || this.tertiaryColor;
    this.errorTextColor = this.errorTextColor || this.tertiaryTextColor;

    this.fillType0 = this.primaryColor;
    this.fillType1 = this.secondaryColor;
    this.fillType2 = adjust(this.primaryColor, { h: 64 });
    this.fillType3 = adjust(this.secondaryColor, { h: 64 });
    this.fillType4 = adjust(this.primaryColor, { h: -64 });
    this.fillType5 = adjust(this.secondaryColor, { h: -64 });
    this.fillType6 = adjust(this.primaryColor, { h: 128 });
    this.fillType7 = adjust(this.secondaryColor, { h: 128 });

    /* pie */
    this.pie1 = this.pie1 || '#0b0000';
    this.pie2 = this.pie2 || '#4d1037';
    this.pie3 = this.pie3 || '#3f5258';
    this.pie4 = this.pie4 || '#4f2f1b';
    this.pie5 = this.pie5 || '#6e0a0a';
    this.pie6 = this.pie6 || '#3b0048';
    this.pie7 = this.pie7 || '#995a01';
    this.pie8 = this.pie8 || '#154706';
    this.pie9 = this.pie9 || '#161722';
    this.pie10 = this.pie10 || '#00296f';
    this.pie11 = this.pie11 || '#01629c';
    this.pie12 = this.pie12 || '#010029';
    this.pieTitleTextSize = this.pieTitleTextSize || '25px';
    this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor;
    this.pieSectionTextSize = this.pieSectionTextSize || '17px';
    this.pieSectionTextColor = this.pieSectionTextColor || this.textColor;
    this.pieLegendTextSize = this.pieLegendTextSize || '17px';
    this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor;
    this.pieStrokeColor = this.pieStrokeColor || 'black';
    this.pieStrokeWidth = this.pieStrokeWidth || '2px';
    this.pieOpacity = this.pieOpacity || '0.7';

    /* class */
    this.classText = this.primaryTextColor;

    /* requirement-diagram */
    this.requirementBackground = this.requirementBackground || this.primaryColor;
    this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor;
    this.requirementBorderSize = this.requirementBorderSize || this.primaryBorderColor;
    this.requirementTextColor = this.requirementTextColor || this.primaryTextColor;
    this.relationColor = this.relationColor || this.lineColor;
    this.relationLabelBackground =
      this.relationLabelBackground ||
      (this.darkMode ? darken(this.secondaryColor, 30) : this.secondaryColor);
    this.relationLabelColor = this.relationLabelColor || this.actorTextColor;

    /* git */
    this.git0 = lighten(this.secondaryColor, 20);
    this.git1 = lighten(this.pie2 || this.secondaryColor, 20);
    this.git2 = lighten(this.pie3 || this.tertiaryColor, 20);
    this.git3 = lighten(this.pie4 || adjust(this.primaryColor, { h: -30 }), 20);
    this.git4 = lighten(this.pie5 || adjust(this.primaryColor, { h: -60 }), 20);
    this.git5 = lighten(this.pie6 || adjust(this.primaryColor, { h: -90 }), 10);
    this.git6 = lighten(this.pie7 || adjust(this.primaryColor, { h: +60 }), 10);
    this.git7 = lighten(this.pie8 || adjust(this.primaryColor, { h: +120 }), 20);
    this.gitInv0 = this.gitInv0 || invert(this.git0);
    this.gitInv1 = this.gitInv1 || invert(this.git1);
    this.gitInv2 = this.gitInv2 || invert(this.git2);
    this.gitInv3 = this.gitInv3 || invert(this.git3);
    this.gitInv4 = this.gitInv4 || invert(this.git4);
    this.gitInv5 = this.gitInv5 || invert(this.git5);
    this.gitInv6 = this.gitInv6 || invert(this.git6);
    this.gitInv7 = this.gitInv7 || invert(this.git7);

    this.tagLabelColor = this.tagLabelColor || this.primaryTextColor;
    this.tagLabelBackground = this.tagLabelBackground || this.primaryColor;
    this.tagLabelBorder = this.tagBorder || this.primaryBorderColor;
    this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor;
    this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor;
  }
  calculate(overrides) {
    if (typeof overrides !== 'object') {
      // Calculate colors form base colors
      this.updateColors();
      return;
    }

    const keys = Object.keys(overrides);

    // Copy values from overrides, this is mainly for base colors
    keys.forEach((k) => {
      this[k] = overrides[k];
    });

    // Calculate colors form base colors
    this.updateColors();
    // Copy values from overrides again in case of an override of derived value
    keys.forEach((k) => {
      this[k] = overrides[k];
    });
  }
}

export const getThemeVariables = (userOverrides) => {
  const theme = new Theme();
  theme.calculate(userOverrides);
  return theme;
};
