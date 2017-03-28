#include <LBLE.h>
#include <LBLEPeriphral.h>

LBLEService __periphralService("951A6899-6F0F-456F-8AE0-5E0B4352D85B");
LBLECharacteristicInt __periphralCharacteristic("B77D53AC-D590-41E0-B75A-6DA442F543F6", LBLE_READ | LBLE_WRITE);
void setup()
{
  __periphralService.addAttribute(__periphralCharacteristic);
  LBLEPeripheral.addService(__periphralService);
  LBLE.begin();

}


void loop()
{

}