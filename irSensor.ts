// irSensor.ts

//% weight=80 color=#FF8000 icon="\uf06e"
//% block="SmartfeldSensoren"
namespace smartfeldSensoren {
    /**
     * Prüft, ob der IR-Sensor hell erkennt (Reflexion gering)
     * @param pin Pin des IR-Sensors, z.B. DigitalPin.P13
     */
    //% blockId=smartfeld_ir_sensor_hell
    //% block="IR-Sensor %pin hell"
    //% group="Optische Sensoren"
    export function irSensorHell(pin: DigitalPin): boolean {
        return pins.digitalReadPin(pin) == 0
    }

    /**
     * Prüft, ob der IR-Sensor dunkel erkennt (Reflexion stark)
     * @param pin Pin des IR-Sensors, z.B. DigitalPin.P15
     */
    //% blockId=smartfeld_ir_sensor_dunkel
    //% block="IR-Sensor %pin dunkel"
    //% group="Optische Sensoren"
    export function irSensorDunkel(pin: DigitalPin): boolean {
        return pins.digitalReadPin(pin) == 1
    }

    /**
     * Prüft, ob der IR-Sensor eine Linie erkennt
     * @param pin Pin des IR-Sensors
     */
    //% blockId=smartfeld_ir_sensor_linie
    //% block="IR-Sensor %pin sieht Linie"
    //% group="Optische Sensoren"
    export function irSensorSiehtLinie(pin: DigitalPin): boolean {
        return pins.digitalReadPin(pin) == 1
    }
}
