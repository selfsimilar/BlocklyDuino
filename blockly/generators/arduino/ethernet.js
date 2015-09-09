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

goog.provide('Blockly.Arduino.ethernet');

goog.require('Blockly.Arduino');

Blockly.Arduino.ethernet_client_begin_dhcp = function() {
  var mac_address = this.getFieldValue('MAC_ADDRESS');
  var version = this.getFieldValue('VERSION');

  Blockly.Arduino.definitions_['define_spi'] = '#include <SPI.h>';
  Blockly.Arduino.definitions_['define_ethernet'] = '#include <Ethernet' + version + '.h>';
  Blockly.Arduino.definitions_['define_ethernet_client'] = 'EthernetClient client;';
  Blockly.Arduino.definitions_['define_mac_address'] = 'byte mac[] = {' + mac_address + '};';

  var code = 'Ethernet.begin(mac)';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.ethernet_client_begin = function() {
  var version = this.getFieldValue('VERSION');
  var mac_address = this.getFieldValue('MAC_ADDRESS');
  var ip_address = this.getFieldValue('IP_ADDRESS');
  ip_address = ip_address.replace(/\./g, ",");

  Blockly.Arduino.definitions_['define_spi'] = '#include <SPI.h>';
  Blockly.Arduino.definitions_['define_ethernet'] = '#include <Ethernet' + version + '.h>';
  Blockly.Arduino.definitions_['define_ethernet_client'] = 'EthernetClient client;';
  Blockly.Arduino.definitions_['define_mac_address'] = 'byte mac[] = {' + mac_address + '};';
  Blockly.Arduino.definitions_['define_ip_address'] = 'IPAddress ip(' + ip_address + ');';

  var code = 'Ethernet.begin(mac,ip);\n';
  return code;
};

Blockly.Arduino.ethernet_localip = function() {
  var code = 'Ethernet.localIP()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.ethernet_available = function() {
  var code = 'client.available()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino.ethernet_connected = function() {
  var code = 'client.connected()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino.ethernet_connect = function() {
  var server = Blockly.Arduino.valueToCode(this, 'SERVER', Blockly.Arduino.ORDER_ATOMIC) || ''
  var port = this.getFieldValue('PORT');

  var code = 'client.connect(' + server + ',' + port +')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.ethernet_print = function() {
  var text = Blockly.Arduino.valueToCode(this, 'TEXT', Blockly.Arduino.ORDER_ATOMIC) || ''

  var code = 'client.print(' + text + ');\n';
  return code;
};

Blockly.Arduino.ethernet_println = function() {
  var text = Blockly.Arduino.valueToCode(this, 'TEXT', Blockly.Arduino.ORDER_ATOMIC) || ''

  var code = 'client.println(' + text +');\n';
  return code;
};

Blockly.Arduino.ethernet_stop = function() {
  var code = 'client.stop();\n';
  return code;
};

Blockly.Arduino.ethernet_read = function() {
  var code = '(char)client.read()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.ethernet_get_request = function() {
  var url = Blockly.Arduino.valueToCode(this, 'URL', Blockly.Arduino.ORDER_ATOMIC) || ''
  var server = Blockly.Arduino.valueToCode(this, 'SERVER', Blockly.Arduino.ORDER_ATOMIC) || ''
  url = url.replace(/\"/g, "");
  server = server.replace(/\"/g, "");

  var code = 'client.println("GET ' + url + ' HTTP/1.1");\n';
  code += 'client.println(F("Host: ' + server + '"));\n';
  code += 'client.println(F("Connection: close"));\n';
  code += 'client.println();\n';

  return code;
};

Blockly.Arduino.ethernet_post_request = function() {
  var url = Blockly.Arduino.valueToCode(this, 'URL', Blockly.Arduino.ORDER_ATOMIC) || ''
  var server = Blockly.Arduino.valueToCode(this, 'SERVER', Blockly.Arduino.ORDER_ATOMIC) || ''
  var post_data = Blockly.Arduino.valueToCode(this, 'POST_DATA', Blockly.Arduino.ORDER_ATOMIC) || ''
  url = url.replace(/\"/g, "");
  server = server.replace(/\"/g, "");

  var code = 'client.println("POST ' + url + ' HTTP/1.1");\n';
  code += 'client.print(F("Host: ' + server + ');\n';
  code += 'client.println(F("Connection: close"));\n';
  code += 'client.println(F("Content-Type: application/x-www-form-urlencoded"));\n';
  code += 'client.println(F("Content-Length: ' + post_data.length-2 + '"));\n';
  code += 'client.print(' + post_data +');\n';

  return code;
};
