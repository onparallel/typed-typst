// Converted from test/universe/corpus/simple-cheatsheet.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  blocks,
  define,
  doc,
  emph,
  external,
  importPackage,
  inline,
  m,
  raw,
  show,
  smartquote,
  space,
  strong,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const cheatsheet = external('cheatsheet')
  const container = define('container').pos('arg1', T.content).returns(T.any).external()
  const cheatsheet_with = define('with').named('info', T.any, null).returns(T.any).external(cheatsheet)
  return doc(
    importPackage('@preview/simple-cheatsheet:0.1.0', [cheatsheet, container]),
    show(cheatsheet_with({ info: { title: 'Cybersecurity Fundamentals', authors: ['John Doe', 'Jane Doe'] } })),
    m.lines(
      m.heading(1, 'Core Principles'),
      inline(
        container(
          blocks(
            m.lines(
              m.heading(2, 'CIA Triad'),
              'The three pillars of information security:',
              m.list(
                m.item([
                  strong(inline`Confidentiality`),
                  ': Sensitive data must be protected from unauthorised read access',
                ]),
                m.item([
                  strong(inline`Integrity`),
                  ': Data and systems must be protected from unauthorised modification',
                ]),
                m.item([
                  strong(inline`Availability`),
                  ': Information must be accessible when needed by authorised users',
                ]),
              ),
            ),
            m.lines(
              m.heading(2, 'Key Terminology'),
              m.list(
                m.item([
                  strong(inline`Vulnerability`),
                  ': A defect (bug or flaw) in a system that an attacker can exploit',
                ]),
                m.item(
                  m.lines(
                    inline`${strong(inline`Threat`)}: A possible danger that might exploit a vulnerability`,
                    m.list(
                      m.item([emph(inline`Intentional`), ': Attacker actively developing an exploit']),
                      m.item([emph(inline`Accidental`), ': Environmental factors (e.g., server room fire)']),
                    ),
                  ),
                ),
                m.item([strong(inline`Threat Agent`), ': An individual or entity carrying out an attack']),
                m.item([strong(inline`Threat Action`), ': The actual procedure used to execute an attack']),
                m.item([
                  strong(inline`Exploit`),
                  ': A concrete attack that leverages a vulnerability (e.g., malware program)',
                ]),
                m.item([
                  strong(inline`Asset`),
                  ': Anything of value to an organisation (hardware, software, data, etc.)',
                ]),
                m.item(
                  m.lines(
                    inline`${strong(inline`Risk`)}: The criticality of a threat or vulnerability`,
                    m.list(m.item(['Formula:', space, unsafeRaw.math`"Risk" = "Probability" times "Impact"`])),
                  ),
                ),
                m.item([
                  strong(inline`Countermeasure`),
                  ': Any action, device, process, or technique that reduces risk',
                ]),
              ),
            ),
            m.lines(
              m.heading(2, 'Malware Classification'),
              m.list(
                m.item([
                  strong(inline`Malware`),
                  ': Malicious software designed to disrupt operations, steal information, or gain unauthorised access',
                ]),
                m.item([
                  strong(inline`Virus`),
                  ': Spreads by inserting copies into executable programs or documents (requires a host). Typically needs user interaction to propagate',
                ]),
                m.item([
                  strong(inline`Worm`),
                  ': Self-replicating malware that spreads autonomously without requiring a host program. Scans networks for vulnerable systems',
                ]),
                m.item([
                  strong(inline`Trojan`),
                  ': Disguises itself as legitimate software but contains malicious code. Does not self-replicate',
                ]),
                m.item([
                  strong(inline`Drive-by Download`),
                  ': Exploits browser or plugin vulnerabilities to automatically execute malicious code from compromised websites',
                ]),
                m.item([
                  strong(inline`Ransomware`),
                  ': Encrypts victim',
                  smartquote({ double: false }),
                  's data and demands payment for decryption keys',
                ]),
              ),
            ),
            m.lines(
              m.heading(2, 'Modern Threat Landscape'),
              'Emerging attack vectors include custom web applications, supply chain attacks, and sophisticated social engineering campaigns',
            ),
            m.lines(
              m.heading(2, 'Types of Security Defects'),
              m.heading(3, 'Implementation Bugs'),
              m.list(
                m.item([strong(inline`Nature`), ': Localised problems introduced during coding phase']),
                m.item([strong(inline`Detection`), ': Code review and static analysis']),
                m.item(
                  m.lines(
                    inline`${strong(inline`Examples`)}:`,
                    m.list(
                      m.item(['Using', space, raw('gets()'), space, 'instead of', space, raw('fgets()')]),
                      m.item(['SQL injection due to string concatenation']),
                      m.item(['Missing input validation']),
                    ),
                  ),
                ),
              ),
            ),
            m.lines(
              m.heading(3, 'Design Flaws'),
              m.list(
                m.item([strong(inline`Nature`), ': Architectural and systemic problems']),
                m.item([strong(inline`Detection`), ': Threat modelling and security design review']),
                m.item(
                  m.lines(
                    inline`${strong(inline`Examples`)}:`,
                    m.list(
                      m.item(['Storing passwords in plaintext without hashing or salting']),
                      m.item(['Implementing validation only on the client-side']),
                      m.item(['Transmitting credentials over un-encrypted HTTP']),
                    ),
                  ),
                ),
              ),
            ),
            m.lines(
              m.heading(3, 'The 50/50 Split'),
              'Security defects are roughly evenly distributed between bugs and flaws, making both code review and design review equally critical',
            ),
            m.lines(
              m.heading(2, 'Reactive Countermeasures'),
              m.heading(3, 'Penetration and Patch Approach'),
              m.list(
                m.item([strong(inline`Method`), ': Address vulnerabilities as they are discovered and exploited']),
                m.item([strong(inline`Advantages`), ': Widely adopted, handles zero-day vulnerabilities']),
                m.item(
                  m.lines(
                    inline`${strong(inline`Limitations`)}:`,
                    m.list(
                      m.item(['Time lag between discovery and patch release']),
                      m.item(['Delay in users installing updates']),
                      m.item(['Patches may introduce new vulnerabilities']),
                    ),
                  ),
                ),
              ),
            ),
            m.lines(
              m.heading(3, 'Network Security Devices'),
              m.list(
                m.item([strong(inline`Purpose`), ': Block or mitigate attacks at the network level']),
                m.item(
                  m.lines(
                    inline`${strong(inline`Examples`)}:`,
                    m.list(
                      m.item([emph(inline`WAF (Web Application Firewall)`), ': Filters malicious HTTP traffic']),
                      m.item([
                        emph(inline`IPS (Intrusion Prevention System)`),
                        ': Detects and blocks suspicious activity',
                      ]),
                    ),
                  ),
                ),
              ),
            ),
            m.lines(
              m.heading(2, 'Proactive Countermeasures'),
              m.heading(3, 'Secure Development Life Cycle (SDLC)'),
              m.list(
                m.item([
                  strong(inline`Principle`),
                  ': Integrate security considerations at every stage of development',
                ]),
                m.item([
                  strong(inline`Approach`),
                  ': Adopt an attacker',
                  smartquote({ double: false }),
                  's mindset during design and implementation',
                ]),
                m.item(
                  m.lines(
                    inline`${strong(inline`Activities`)}:`,
                    m.list(
                      m.item(['Threat modelling during design phase']),
                      m.item(['Security-focused code reviews']),
                      m.item(['Penetration testing before deployment']),
                      m.item(['Security training for development teams']),
                    ),
                  ),
                ),
              ),
            ),
            m.lines(
              m.heading(3, 'Balanced Strategy'),
              'While proactive measures significantly reduce vulnerabilities, they cannot anticipate all future attack vectors. A comprehensive security strategy requires both proactive and reactive approaches',
            ),
          ),
        ),
      ),
    ),
    m.lines(
      m.heading(1, 'Authentication & Authorisation'),
      inline(
        container(
          blocks(
            m.lines(
              m.heading(2, 'Authentication Mechanisms'),
              m.heading(3, 'Password-Based Authentication'),
              m.list(
                m.item(
                  m.lines(
                    inline`${strong(inline`Best Practices`)}:`,
                    m.list(
                      m.item(['Use bcrypt, scrypt, or Argon2 for password hashing']),
                      m.item(['Implement salting to prevent rainbow table attacks']),
                      m.item(['Enforce strong password policies (length, complexity)']),
                      m.item(['Enable multi-factor authentication (MFA)']),
                    ),
                  ),
                ),
              ),
            ),
            m.lines(
              m.heading(3, 'Token-Based Authentication'),
              m.list(
                m.item([strong(inline`JWT (JSON Web Tokens)`), ': Stateless authentication for distributed systems']),
                m.item([strong(inline`OAuth 2.0`), ': Industry-standard authorisation framework']),
                m.item([strong(inline`Session Tokens`), ': Server-side session management with secure cookies']),
              ),
            ),
            m.lines(
              m.heading(3, 'Biometric Authentication'),
              'Fingerprint, facial recognition, and iris scanning for high-security applications',
            ),
            m.lines(
              m.heading(2, 'Authorisation Models'),
              m.heading(3, 'Role-Based Access Control (RBAC)'),
              'Users assigned to roles; permissions granted to roles rather than individuals',
            ),
            m.lines(
              m.heading(3, 'Attribute-Based Access Control (ABAC)'),
              'Decisions based on attributes of users, resources, and environmental conditions',
            ),
            m.lines(
              m.heading(3, 'Principle of Least Privilege'),
              'Users should have only the minimum permissions necessary to perform their duties',
            ),
          ),
        ),
      ),
    ),
    m.lines(
      m.heading(1, 'Network Security'),
      inline(
        container(
          blocks(
            m.lines(
              m.heading(2, 'Encryption Protocols'),
              m.heading(3, 'Transport Layer Security (TLS)'),
              m.list(
                m.item([strong(inline`Purpose`), ': Secure communication over networks']),
                m.item([strong(inline`Use Cases`), ': HTTPS, email encryption, VPNs']),
                m.item([strong(inline`Current Standard`), ': TLS 1.3 (avoid TLS 1.0 and 1.1)']),
              ),
            ),
            m.lines(m.heading(3, 'IPsec'), 'Secures IP communications by authenticating and encrypting each packet'),
            m.lines(m.heading(3, 'SSH (Secure Shell)'), 'Provides secure remote access and file transfer capabilities'),
            m.lines(
              m.heading(2, 'Firewall Types'),
              m.heading(3, 'Packet Filtering'),
              'Examines packet headers and filters based on IP addresses, ports, and protocols',
            ),
            m.lines(
              m.heading(3, 'Stateful Inspection'),
              'Tracks connection state and filters based on traffic context',
            ),
            m.lines(
              m.heading(3, 'Application Layer (Proxy)'),
              'Operates at Layer 7, inspecting application-specific protocols (HTTP, FTP, etc.)',
            ),
            m.lines(
              m.heading(3, 'Next-Generation Firewalls (NGFW)'),
              'Combines traditional firewall with IPS, deep packet inspection, and application awareness',
            ),
          ),
        ),
      ),
    ),
    m.lines(
      m.heading(1, 'Secure Coding Practices'),
      inline(
        container(
          blocks(
            m.lines(
              m.heading(2, 'Input Validation'),
              m.heading(3, 'Whitelist Approach'),
              'Accept only known-good input patterns (preferred method)',
            ),
            m.lines(m.heading(3, 'Sanitisation'), 'Remove or encode dangerous characters from user input'),
            m.lines(m.heading(3, 'Parameterised Queries'), 'Use prepared statements to prevent SQL injection attacks'),
            m.lines(
              m.heading(3, 'Example Vulnerabilities'),
              m.list(
                m.item(['Cross-Site Scripting (XSS): Unsanitized user input rendered in HTML']),
                m.item(['SQL Injection: Concatenated SQL queries with user input']),
                m.item(['Command Injection: Unvalidated input passed to system commands']),
              ),
            ),
            m.lines(
              m.heading(2, 'Output Encoding'),
              m.heading(3, 'Context-Aware Encoding'),
              m.list(
                m.item([
                  strong(inline`HTML Context`),
                  ': Encode',
                  space,
                  raw('<'),
                  ',',
                  space,
                  raw('>'),
                  ',',
                  space,
                  raw('&'),
                  ',',
                  space,
                  raw('"'),
                  ',',
                  space,
                  raw("'"),
                ]),
                m.item([strong(inline`JavaScript Context`), ': Use JSON serialisation or JavaScript encoding']),
                m.item([strong(inline`URL Context`), ': Apply URL encoding for query parameters']),
              ),
            ),
            m.lines(
              m.heading(3, 'Content Security Policy (CSP)'),
              'HTTP header that prevents XSS by controlling resource loading sources',
            ),
          ),
        ),
      ),
    ),
  )
}
