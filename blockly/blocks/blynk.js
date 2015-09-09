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

goog.provide('Blockly.Blocks.blynk');

goog.require('Blockly.Blocks');

Blockly.Blocks.blynk.HUE = 225;

Blockly.Blocks.blynk.image = filepath.media+'/blynk.png';

Blockly.Blocks['blynk_begin'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.BLYNK_BEGIN_HELPURL);
    this.setColour(Blockly.Blocks.blynk.HUE);
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ETHERNET_VERSION_1,""],[Blockly.Msg.ETHERNET_VERSION_2,"2"]]), 'VERSION')
      .appendField(Blockly.Msg.BLYNK_BEGIN_TITLE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.AUTH)
      .appendField(new Blockly.FieldTextInput("auth"),"AUTH");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.BLYNK_BEGIN_TOOLTIP);
  }
};

Blockly.Blocks['blynk_get_virtual_action'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.BLYNK_GET_VIRTUAL_ACTION_HELPURL);
    this.setColour(Blockly.Blocks.blynk.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.BLYNK_GET_VIRTUAL_ACTION_TITLE);
    this.appendDummyInput()
      .appendField("V")
      .appendField(new Blockly.FieldTextInput("0"),"PIN");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.BLYNK_GET_VIRTUAL_ACTION_TOOLTIP);
  }
};

Blockly.Blocks['blynk_connect'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.BLYNK_CONNECT_HELPURL);
    this.setColour(Blockly.Blocks.blynk.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.BLYNK_CONNECT_TITLE);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.BLYNK_CONNECT_TOOLTIP);
  }
};

Blockly.Blocks['blynk_get_virtual_value'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.BLYNK_GET_VIRTUAL_VALUE_HELPURL);
    this.setColour(Blockly.Blocks.blynk.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.BLYNK_GET_VIRTUAL_VALUE_TITLE);
    this.appendDummyInput()
      .appendField("V")
      .appendField(new Blockly.FieldTextInput("0"),"PIN");
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.BLYNK_GET_VIRTUAL_VALUE_TOOLTIP);
  }
};

Blockly.Blocks['blynk_virtual_write'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.BLYNK_VIRTUAL_WRITE_HELPURL);
    this.setColour(Blockly.Blocks.blynk.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.BLYNK_VIRTUAL_WRITE_TITLE);
    this.appendDummyInput()
      .appendField("V")
      .appendField(new Blockly.FieldTextInput("0"),"PIN");
    this.appendValueInput("VALUE")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.VALUE);
    this.appendValueInput("INTERVAL")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.INTERVAL);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.BLYNK_GET_VIRTUAL_VALUE_TOOLTIP);
  }
};

Blockly.Blocks['blynk_email'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.BLYNK_EMAIL_HELPURL);
    this.setColour(Blockly.Blocks.blynk.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.BLYNK_EMAIL_TITLE);
    this.appendValueInput("ADDRESS")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.MAIL_ADDRESS);
    this.appendValueInput("TITLE")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.EMAIL_TITLE);
    this.appendValueInput("BODY")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.EMAIL_BODY);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.BLYNK_EMAIL_TOOLTIP);
  }
};

Blockly.Blocks['blynk_notify'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.BLYNK_NOTIFY_HELPURL);
    this.setColour(Blockly.Blocks.blynk.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.BLYNK_NOTIFY_TITLE);
    this.appendValueInput("TEXT")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TEXT);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.BLYNK_EMAIL_TOOLTIP);
  }
};

Blockly.Blocks['blynk_tweet'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.BLYNK_TWEET_HELPURL);
    this.setColour(Blockly.Blocks.blynk.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.BLYNK_TWEET_TITLE);
    this.appendValueInput("TEXT")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TEXT);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.BLYNK_TWEET_TOOLTIP);
  }
};

Blockly.Blocks['blynk_joystick'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.BLYNK_JOYSTICK_HELPURL);
    this.setColour(Blockly.Blocks.blynk.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.BLYNK_JOYSTICK_TITLE);
    this.appendDummyInput()
      .appendField("V")
      .appendField(new Blockly.FieldTextInput("0"),"PIN");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.BLYNK_JOYSTICK_TOOLTIP);
  }
};

Blockly.Blocks['blynk_zergba'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.BLYNK_ZERGBA_HELPURL);
    this.setColour(Blockly.Blocks.blynk.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.BLYNK_ZERGBA_TITLE);
    this.appendDummyInput()
      .appendField("V")
      .appendField(new Blockly.FieldTextInput("0"),"PIN");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.BLYNK_ZERGBA_TOOLTIP);
  }
};

