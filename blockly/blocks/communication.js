/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Fred Lin.
 * https://github.com/gasolin/BlocklyDuino
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
 * @fileoverview Helper functions for generating Arduino blocks.
 * @author gasolin@gmail.com (Fred Lin)
 */
'use strict';

//To support syntax defined in http://arduino.cc/en/Reference/HomePage

goog.provide('Blockly.Blocks.communication');

goog.require('Blockly.Blocks');

Blockly.Blocks.communication.HUE = 205;

Blockly.Blocks['serial_print'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.COMMUNICATION_SERIAL_PRINT_HELPURL);
    this.setColour(Blockly.Blocks.communication.HUE);
    this.appendValueInput("CONTENT", 'String')
    .appendField(Blockly.Msg.COMMUNICATION_SERIAL_PRINT_APPENDTEXT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.COMMUNICATION_SERIAL_PRINT_TOOLTIP);
  }
};

Blockly.Blocks['serial_read'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.COMMUNICATION_SERIAL_READ_HELPURL);
    this.setColour(Blockly.Blocks.communication.HUE);
    this.appendDummyInput()
    .appendField(Blockly.Msg.COMMUNICATION_SERIAL_READ_APPENDTEXT);
    this.setOutput(true,"byte");
    this.setTooltip(Blockly.Msg.COMMUNICATION_SERIAL_READ_TOOLTIP);
  }
};

Blockly.Blocks['serial_available'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.COMMUNICATION_SERIAL_AVAILABLE_HELPURL);
    this.setColour(Blockly.Blocks.communication.HUE);
    this.appendDummyInput()
    .appendField(Blockly.Msg.COMMUNICATION_SERIAL_AVAILABLE_APPENDTEXT);
    this.setOutput(true, "Number");
    this.setTooltip(Blockly.Msg.COMMUNICATION_SERIAL_AVAILABLE_TOOLTIP);
  }
};

Blockly.Blocks['serial_println'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.COMMUNICATION_SERIAL_PRINTLN_HELPURL);
    this.setColour(Blockly.Blocks.communication.HUE);
    this.appendValueInput("Val")
    .setCheck("String")
    .appendField(Blockly.Msg.COMMUNICATION_SERIAL_PRINTLN_APPENDTEXT);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.COMMUNICATION_SERIAL_PRINTLN_TOOLTIP);
  }
};
