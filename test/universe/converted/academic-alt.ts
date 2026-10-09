// Converted from test/universe/corpus/academic-alt.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, external, importPackage, inline, m, raw, show } from '../../../src/index.ts'

export default () => {
  const universityAssignment = external('university-assignment')
  const universityAssignment_with = define('with')
    .named('author', T.any, null)
    .named('details', T.any, null)
    .named('subtitle', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(universityAssignment)
  return doc(
    importPackage('@preview/academic-alt:0.1.0', [universityAssignment]),
    show(
      universityAssignment_with({
        title: 'Lab 3: GPIO Control and LED Blinking',
        subtitle: 'Embedded Systems Programming',
        author: 'John Doe',
        details: {
          course: 'ECSE 303',
          instructor: 'Prof. Smith',
          dueDate: 'September 19, 2025',
          hardware: 'Raspberry Pi 4, LED, 220Ω resistor, breadboard, jumper wires',
          software: 'Python (RPi.GPIO), C (WiringPi)',
          duration: '~3 hours',
          labNumber: 'Lab 3',
        },
      }),
    ),
    m.heading(1, 'Introduction'),
    'This lab explores the fundamentals of General Purpose Input/Output (GPIO) control on the Raspberry Pi platform. We will implement a simple LED blinking program that demonstrates basic digital output control and timing mechanisms.',
    m.lines(
      'The objectives of this lab are:',
      m.list(
        m.item(['Understand GPIO pin configuration and control']),
        m.item(['Implement basic timing functions']),
        m.item(['Compare Python and C implementations']),
        m.item(['Analyze performance differences between programming languages']),
      ),
    ),
    m.heading(1, 'Background'),
    'GPIO pins allow microcontrollers and single-board computers to interface with external devices. The Raspberry Pi provides 40 GPIO pins that can be configured as either inputs or outputs, with configurable pull-up/pull-down resistors and interrupt capabilities.',
    m.heading(1, 'Methodology'),
    m.heading(2, 'Hardware Setup'),
    m.lines(
      'The following components were used:',
      m.list(
        m.item(['Raspberry Pi 4 Model B']),
        m.item(['Red LED (2.1V forward voltage, 20mA forward current)']),
        m.item(['220Ω current-limiting resistor']),
        m.item(['Breadboard for prototyping']),
        m.item(['Jumper wires for connections']),
      ),
    ),
    'The LED was connected between GPIO pin 18 and ground, with the current-limiting resistor in series.',
    m.heading(2, 'Software Implementation'),
    'Two implementations were developed:',
    'Both programs implement the same functionality: blinking an LED at 1Hz (500ms on, 500ms off).',
    m.heading(2, 'Code Examples'),
    'The Python implementation:',
    inline(
      raw(
        { block: true, lang: 'python' },
        'import RPi.GPIO as GPIO\nimport time\n\n# Set up GPIO\nGPIO.setmode(GPIO.BCM)\nGPIO.setup(18, GPIO.OUT)\n\ntry:\n    while True:\n        GPIO.output(18, GPIO.HIGH)  # Turn LED on\n        time.sleep(0.5)\n        GPIO.output(18, GPIO.LOW)   # Turn LED off\n        time.sleep(0.5)\nexcept KeyboardInterrupt:\n    GPIO.cleanup()',
      ),
    ),
    'The C implementation:',
    inline(
      raw(
        { block: true, lang: 'c' },
        '#include <wiringPi.h>\n#include <stdio.h>\n\n#define LED_PIN 18\n\nint main(void) {\n    wiringPiSetupGpio();\n    pinMode(LED_PIN, OUTPUT);\n    \n    while (1) {\n        digitalWrite(LED_PIN, HIGH);\n        delay(500);\n        digitalWrite(LED_PIN, LOW);\n        delay(500);\n    }\n    \n    return 0;\n}',
      ),
    ),
    m.heading(1, 'Results'),
    'Both implementations successfully controlled the LED with the following observations:',
    m.list(
      m.item(['The LED blinked consistently at 1Hz']),
      m.item(['Visual timing appeared identical between implementations']),
      m.item(['The C implementation showed slightly more precise timing']),
      m.item(['Python implementation was easier to develop and debug']),
    ),
    m.heading(2, 'Performance Analysis'),
    'Timing measurements were conducted using a logic analyzer:',
    inline`The C implementation demonstrated more consistent timing, likely due to reduced overhead compared
to Python's interpreted execution.`,
    m.heading(1, 'Discussion'),
    'The lab successfully demonstrated basic GPIO control on the Raspberry Pi. Key findings include:',
    m.list(
      m.item(['GPIO configuration is straightforward with both RPi.GPIO and WiringPi libraries']),
      m.item(['Hardware setup requires attention to current-limiting resistors']),
      m.item(['C implementations offer better timing precision for real-time applications']),
      m.item(['Python provides faster development cycles for prototyping']),
    ),
    m.heading(1, 'Conclusion'),
    'This lab provided hands-on experience with GPIO control on embedded systems. The successful implementation of LED blinking in both Python and C demonstrates the versatility of the Raspberry Pi platform for embedded programming education.',
    m.lines(
      'Future work could explore:',
      m.list(
        m.item(['PWM control for LED brightness modulation']),
        m.item(['Interrupt-driven input handling']),
        m.item(['Multi-threaded applications']),
        m.item(['Real-time operating system integration']),
      ),
    ),
  )
}
