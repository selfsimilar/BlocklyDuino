/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Loop blocks for Blockly.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Blocks.ultrasonic');

goog.require('Blockly.Blocks');

Blockly.Blocks.ultrasonic.HUE = 0;

Blockly.Blocks['ultrasonic_setting'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(Blockly.Blocks.ultrasonic.HUE);
    this.appendDummyInput()
      .appendField("Ultrasonic Setting:");
    this.appendDummyInput()
      .appendField("TriggerPin");
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown(profile.default.digital), "TRIG")
    this.appendDummyInput()
      .appendField("EchoPin");
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown(profile.default.digital), "ECHO")
    this.appendDummyInput()
      .appendField("ResetPin");
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown(profile.default.digital), "RESET")
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['ultrasonic_maxrange'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(Blockly.Blocks.ultrasonic.HUE);
    this.appendValueInput("MAXRANGE")
      .setCheck("Number")
      .appendField("MaxRange");
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([["cm", "CM"], ["inch", "INCH"]]), "UNIT");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['ultrasonic_distance'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(Blockly.Blocks.ultrasonic.HUE);
    this.appendDummyInput()
      .appendField("Distance");
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([["cm", "CM"], ["inch", "INCH"]]), "UNIT");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip('');
  }
};
