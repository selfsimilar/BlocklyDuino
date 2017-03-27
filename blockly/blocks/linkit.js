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

goog.provide('Blockly.Blocks.linkit');

goog.require('Blockly.Blocks');

Blockly.Blocks.linkit.HUE = 35;

Blockly.Blocks.linkit.image = filepath.media+'/linkit_7697.png';

Blockly.Blocks['linkit_ble_ready'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.LINKIT_SET_BLE_HELPURL);
    this.setColour(Blockly.Blocks.linkit.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.LINKIT_SET_BLE_READY_TITLE);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.LINKIT_SET_BLE_TOOLTIP);
  }
};

Blockly.Blocks['linkit_wifi_wait_until_ready'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.LINKIT_SET_WIFI_HELPURL);
    this.setColour(Blockly.Blocks.linkit.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.LINKIT_SET_WIFI_UNTIL_READY_TITLE)
      .appendField(new Blockly.FieldImage(Blockly.Blocks.linkit.image, 64, 43));
    this.appendValueInput("SSID")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LINKIT_SET_WIFI_SSID);
    this.appendValueInput("PASSWORD")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LINKIT_SET_WIFI_PASSWORD);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LINKIT_SET_WIFI_TOOLTIP);
  }
};

Blockly.Blocks['linkit_wifi_ready_advanced'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.LINKIT_SET_WIFI_HELPURL);
    this.setColour(Blockly.Blocks.linkit.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.LINKIT_SET_WIFI_READY_TITLE)
      .appendField(new Blockly.FieldImage(Blockly.Blocks.linkit.image, 64, 43));
    this.appendValueInput("SSID")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LINKIT_SET_WIFI_SSID);
    this.appendValueInput("PASSWORD")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LINKIT_SET_WIFI_PASSWORD);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.LINKIT_SET_WIFI_TOOLTIP);
  }
};

Blockly.Blocks['linkit_wifi_ready'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.LINKIT_SET_WIFI_HELPURL);
    this.setColour(Blockly.Blocks.linkit.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.LINKIT_SET_WIFI_READY_TITLE);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.LINKIT_SET_WIFI_TOOLTIP);
  }
};

Blockly.Blocks['linkit_wifi'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.LINKIT_SET_WIFI_HELPURL);
    this.setColour(Blockly.Blocks.linkit.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.LINKIT_SET_WIFI_TITLE)
      .appendField(new Blockly.FieldImage(Blockly.Blocks.linkit.image, 64, 43));
    this.appendValueInput("SSID")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LINKIT_SET_WIFI_SSID);
    this.appendValueInput("PASSWORD")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LINKIT_SET_WIFI_PASSWORD);
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.LINKIT_SET_WIFI_TOOLTIP);
  }
};

Blockly.Blocks['linkit_wifi_ignore_result'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.LINKIT_SET_WIFI_HELPURL);
    this.setColour(Blockly.Blocks.linkit.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.LINKIT_SET_WIFI_TITLE)
      .appendField(new Blockly.FieldImage(Blockly.Blocks.linkit.image, 64, 43));
    this.appendValueInput("SSID")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LINKIT_SET_WIFI_SSID);
    this.appendValueInput("PASSWORD")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LINKIT_SET_WIFI_PASSWORD);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LINKIT_SET_WIFI_TOOLTIP);
  }
};

Blockly.Blocks['linkit_wifi_status'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.LINKIT_SET_WIFI_HELPURL);
    this.setColour(Blockly.Blocks.linkit.HUE);
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LINKIT_SET_WIFI_STATUS_NO_SHIELD, "WL_NO_SHIELD"], [Blockly.Msg.LINKIT_SET_WIFI_STATUS_IDLE, "WL_IDLE_STATUS"], [Blockly.Msg.LINKIT_SET_WIFI_STATUS_NO_SSID_AVAIL, "WL_NO_SSID_AVAIL"], [Blockly.Msg.LINKIT_SET_WIFI_STATUS_SCAN_COMPLETED, "WL_SCAN_COMPLETED"], [Blockly.Msg.LINKIT_SET_WIFI_STATUS_CONNECTED, "WL_CONNECTED"], [Blockly.Msg.LINKIT_SET_WIFI_STATUS_CONNECT_FAILED, "WL_CONNECT_FAILED"], [Blockly.Msg.LINKIT_SET_WIFI_STATUS_CONNECTION_LOST, "WL_CONNECTION_LOST"], [Blockly.Msg.LINKIT_SET_WIFI_STATUS_DISCONNECTED, "WL_DISCONNECTED"]]), 'String')
    this.setOutput(true, 'String');
    this.setTooltip('');
  }
};
