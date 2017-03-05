/**
 * @fileoverview Blockly blocks to use a SparkFun IT remote control
 * @author gabrielkrell (Gabriel Krell)
 */
'use strict';

goog.provide('Blockly.Arduino.ir_remote');

goog.require('Blockly.Blocks');

Blockly.Blocks['ir_remote_get'] = {
  init: function() {
    this.appendValueInput("PIN")
        .setCheck("Number")
        .appendField("get button press on pin");
    this.setOutput(true, "String");
    this.setColour(45);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['ir_remote_button'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["Up","UP"], ["Down","DOWN"], ["Etc","ET CETERA"]]), "BUTTON");
    this.setOutput(true, "remote_button");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
