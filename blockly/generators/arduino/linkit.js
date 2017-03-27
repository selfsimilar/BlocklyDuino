/**
 * @license
 * Visual Blocks Language
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
 * @fileoverview Generating Arduino for list blocks.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Arduino.linkit');

goog.require('Blockly.Arduino');

Blockly.Arduino.linkit_ble_ready = function() {

  Blockly.Arduino.definitions_['define_linkit_ble_include'] = '#include <LBLE.h>';

  Blockly.Arduino.setups_['define_linkit_ble_setup'] = 'LBLE.begin();';

  var code = "LBLE.ready()";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.linkit_wifi_ready_advanced = function() {

  var ssid = Blockly.Arduino.valueToCode(this, 'SSID', Blockly.Arduino.ORDER_ATOMIC) || ''
  var password = Blockly.Arduino.valueToCode(this, 'PASSWORD', Blockly.Arduino.ORDER_ATOMIC) || ''
  ssid = ssid.replace(/\"/g, "");
  password = password.replace(/\"/g, "");

  Blockly.Arduino.definitions_['define_linkit_wifi_include'] = '#include <LWiFi.h>';
  Blockly.Arduino.definitions_['define_linkit_wifi_ssid'] = 'char _lwifi_ssid[] = "' + ssid + '";';
  Blockly.Arduino.definitions_['define_linkit_wifi_pass'] = 'char _lwifi_pass[] = "' + password + '";';

  var code = "(WiFi.begin(_lwifi_ssid, _lwifi_pass) == WL_CONNECTED)";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.linkit_wifi_ready = function() {
  var code = "(WiFi.begin(_lwifi_ssid, _lwifi_pass) == WL_CONNECTED)";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.linkit_wifi = function() {

  var ssid = Blockly.Arduino.valueToCode(this, 'SSID', Blockly.Arduino.ORDER_ATOMIC) || ''
  var password = Blockly.Arduino.valueToCode(this, 'PASSWORD', Blockly.Arduino.ORDER_ATOMIC) || ''
  ssid = ssid.replace(/\"/g, "");
  password = password.replace(/\"/g, "");

  Blockly.Arduino.definitions_['define_linkit_wifi_include'] = '#include <LWiFi.h>';
  Blockly.Arduino.definitions_['define_linkit_wifi_ssid'] = 'char _lwifi_ssid[] = "' + ssid + '";';
  Blockly.Arduino.definitions_['define_linkit_wifi_pass'] = 'char _lwifi_pass[] = "' + password + '";';

  var code = "WiFi.begin(_lwifi_ssid, _lwifi_pass)";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.linkit_wifi_ignore_result = function() {

  var ssid = Blockly.Arduino.valueToCode(this, 'SSID', Blockly.Arduino.ORDER_ATOMIC) || ''
  var password = Blockly.Arduino.valueToCode(this, 'PASSWORD', Blockly.Arduino.ORDER_ATOMIC) || ''
  ssid = ssid.replace(/\"/g, "");
  password = password.replace(/\"/g, "");

  Blockly.Arduino.definitions_['define_linkit_wifi_include'] = '#include <LWiFi.h>';
  Blockly.Arduino.definitions_['define_linkit_wifi_ssid'] = 'char _lwifi_ssid[] = "' + ssid + '";';
  Blockly.Arduino.definitions_['define_linkit_wifi_pass'] = 'char _lwifi_pass[] = "' + password + '";';

  Blockly.Arduino.setups_['define_linkit_wifi_setup'] = 'WiFi.begin(_lwifi_ssid, _lwifi_pass);';

  var code = "\n";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.linkit_wifi_status = function() {
  var code = this.getFieldValue('String');
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
