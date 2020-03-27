---
    path: '/quantum-computers-explained'
    title: Quantum Computers Explained
    author: Luis Alvarez
    authorImage: 'https://commithub.s3.us-east-2.amazonaws.com/blog-posts/author/luis.jpg'
    date: '2020-03-27'
    description: Deep dive at what are quantum computers and what can they offer
    categories: [Technology Explained]
    backgroundImg: 'https://commithub.s3.us-east-2.amazonaws.com/blog-posts/quantum-computers-explained/quantum.jpg'
    published: true
---

Computers have transformed the way we work: changing how we store information, improving processes for working with that data, and allowing us to easily share the data.
The conception of this amazing tool started the <a href="https://en.wikipedia.org/wiki/Digital_Revolution" rel="noopener" target="_blank">Digital Revolution</a>.
This led to a race to make computers more consumer friendly by reducing their size over time.
Now in 2020, we have smartphones that have 12GB of RAM and a processor that runs at 2.5GHz.
It's truly phenomenal all the progress we have made, but this technology has a limit; however, quantum computers can provide the means to surpass this limit.
Let's explore first what the classical computer is to get an understanding of why quantum computers were conceived.

## Classical Computer

<img class="section-jumbo" src="https://commithub.s3.us-east-2.amazonaws.com/blog-posts/quantum-computers-explained/macintosh.jpg" alt="Macintosh" />

<a href="https://en.wikipedia.org/wiki/Computer" rel="noopener" target="_blank">Classical Computers</a>
(called classical to differentiate standard computers from quantum computers) are devices that follow instructions to achieve a task.
With computer programming, we can create logical operations that tell the computer what to do and in what order.
Programs are a result of that programming that, when run, follow the operations specified in the program.
The early applications of computers were for simple calculations; in essence, even computers today are just a bunch of simple calculations.

### CPU

<img class="section-jumbo" src="https://commithub.s3.us-east-2.amazonaws.com/blog-posts/quantum-computers-explained/cpu.jpg" alt="CPU" />

Classical computers typically have a <a href="https://en.wikipedia.org/wiki/Central_processing_unit" rel="noopener" target="_blank">Central Processing Unit (CPU)</a>.
The CPU is in charge of carrying out arithmetic, logical, controlling, and input/output (I/O) operations specified on the instructions.
Modern CPUs are microprocessors, where the CPU is contained on a single metal-oxide-semiconductor (MOS) integrated circuit (IC) chip.
Computers don't understand words or numbers the way humans do and at the lowest level; instead, everything is represented by a binary electrical signal that registers two states: on and off.
The CPU is one of the pieces that takes complicated data and decodes it into binary.

### Binary

<img class="section-jumbo" src="https://commithub.s3.us-east-2.amazonaws.com/blog-posts/quantum-computers-explained/binary.jpg" alt="Binary" />

<a href="https://en.wikipedia.org/wiki/Binary_number" rel="noopener" target="_blank">Binary Numbers</a>
are numbers expressed in a base-2 numeral system: usually 0 (zero) and 1 (one).
Computers use binary because <a href="https://en.wikipedia.org/wiki/Vacuum_tube_computer" rel="noopener" target="_blank">First-generation Computers</a>
utilized <a href="https://en.wikipedia.org/wiki/Vacuum_tube" rel="noopener" target="_blank">Vacuum Tubes</a>,
and precisely measuring and controlling electrical currents was more difficult.
Representing "on" and "off" states with negative and positive charges was more sensible. The "on" state is represented by a negative charge because electrons have negative charge.
In binary, we represent the "on" state with a 1 and the "off" state with a 0.
Early computers were far bulkier than what we have now, but we've kept the same fundamental principles.

### Transistors

<img class="section-jumbo" src="https://commithub.s3.us-east-2.amazonaws.com/blog-posts/quantum-computers-explained/transistors.png" alt="Transistors" />

A <a href="https://en.wikipedia.org/wiki/Transistor" rel="noopener" target="_blank">Transistor</a>
are semiconductor devices used to amplify or switch electronic signals and electrical power.
They’re composed of semiconductor material with at least three terminals to connect to an external circuit.
Transistors act like a switch turning the current on and off—this is where binary comes in.
The transistor is a fundamental building block for all electronics, making devices smaller and cheaper to manufacture and thereby revolutionizing the world of electronics, paving the way for smaller computers.
Compared to vacuum tubes, transistors are smaller and require less power to operate.
Transistors are primarily used in the CPU to perform mathematical calculation, and a series of transistors may also be used as a
<a href="https://en.wikipedia.org/wiki/Logic_gate" rel="noopener" target="_blank">Logic Gate</a>
when performing logical operations. Modern CPUs contain millions of microscopic transistors.

### Moore's Law

<img class="section-jumbo" src="https://commithub.s3.us-east-2.amazonaws.com/blog-posts/quantum-computers-explained/mooreslaw.png" alt="Moore's Law Graph" />

<a href="https://en.wikipedia.org/wiki/Moore%27s_law" rel="noopener" target="_blank">Moore's Law</a>
originated as the observation that the number of transistors in an integrated circuit was doubling every two years.
The observation was named after Gordon Moore, the co-founder of Fairchild Semiconductor and later CEO of Intel.
Moore's prediction became the development principle used in the semiconductor industry to guide long-term planning and to set targets for research and development (R&D) for several decades.
Moore's law is an observation and projection of a historical trend, not a physical or natural law. The rate held steady from 1975 until around 2012.

### Limitations of the Classical Computer

Moore's Law held strong over the years, with transistors becoming increasingly smaller to fit into CPUs.
Transistors have gotten as small as 10 nanometers, so small that the channel that carries the electrical current through the transistor cannot always contain it.
The trend is already starting to slow down because we face a physical limitation due to
<a href="https://en.wikipedia.org/wiki/Quantum_tunnelling" rel="noopener" target="_blank">Quantum Tunneling</a>.

## Quantum Computer

<img class="section-jumbo" src="https://commithub.s3.us-east-2.amazonaws.com/blog-posts/quantum-computers-explained/qubit.jpg" alt="Qubit" />

<a href="https://en.wikipedia.org/wiki/Quantum_computing" rel="noopener" target="_blank">Quantum Computers</a>
apply quantum-mechanical phenomena, such as superposition and entanglement, to perform computation.
They instead use <a href="https://en.wikipedia.org/wiki/Qubit" rel="noopener" target="_blank">Qubits</a> to hold quantum information.
Similar to the bit in classical computers, a qubit can result in a 1 or a 0, but the general state according to quantum mechanics can be a superposition of both.
When you measure a classical bit, the state won't be disturbed, it can only be a 1 or a 0.
In contrast, when you measure a qubit, the superposition state is destroyed. Before being observed, there is no way to tell if a qubit is 1 or a 0.

A qubit can hold more information, namely, up to two bits using superdense coding.
They also exhibit an effect called quantum entanglement, allowing qubits to express higher correlation than classical systems.
his effect makes quantum computers very efficient for doing very intensive calculations that classical computers will take too long to perform.

Quantum computing methodologies can be divided into two categories: analog and digital.

### Analog

These approaches can be further divided into quantum simulation, quantum annealing, and adiabatic quantum computation.

#### Quantum Simulations

<img class="section-jumbo" src="https://commithub.s3.us-east-2.amazonaws.com/blog-posts/quantum-computers-explained/simulation.jpg" alt="Are we in a simulation?" />

Classical computers have difficulty simulating quantum mechanics, but by using quantum simulators, we can study the phenomena more accurately.
Running a simulation is not as efficient as running an actual quantum computer, but it's a start for studying the technology and its applications.
A great example of a quantum simulator is <a href="https://qiskit.org/" rel="noopener" target="_blank">Qiskit</a>
, where you run a simulation of a quantum computer through your classical computer.

#### Quantum Annealing

In essence, <a href="https://en.wikipedia.org/wiki/Quantum_annealing" rel="noopener" target="_blank">Quantum Annealing</a> finds the low-energy states of a problem.
A fundamental rule in physics is that everything tends to seek a minimum energy state.
This is also true for quantum physics.
In optimization problems, we search for the best of many possible combinations. By using physics, we can frame these sorts of problems as energy minimization problems.
The most remarkable thing about this process is that unlike <a href="https://en.wikipedia.org/wiki/Simulated_annealing" rel="noopener" target="_blank">Simulated Annealing</a>
, which can get stuck in local minima, the global minimum is always reachable thanks to quantum tunnelling.
n a sampling problem for many low-energy states, characterizing the shape of the energy landscape is useful for creating a probabilistic model of reality in machine learning problems.
One company that uses quantum annealing is <a href="https://docs.dwavesys.com/docs/latest/c_gs_2.html" rel="noopener" target="_blank">DWAVE</a>.

#### Adiabatic Quantum Computation

This is closely related to quantum annealing, but it uses the <a href="https://en.wikipedia.org/wiki/Adiabatic_theorem" rel="noopener" target="_blank">Adiabatic Theorem</a> to do calculations.
<a href="https://link.springer.com/article/10.1007/BF01343193" rel="noopener" target="_blank">Born and Fock</a> first stated this concept as follows:

“A physical system remains in its instantaneous eigenstate if a given perturbation is acting on it slowly enough and if there is a gap between the eigenvalue and the rest of the Hamiltonian's spectrum.”

More simply terms, when you subject a quantum mechanical system to gradually changing external conditions, its functional form adapts.
When you subject the system to rapidly varying conditions, there isn’t enough time for the functional form to adapt, so the spatial probability density doesn’t change.

### Digital

A digital quantum computer uses quantum logic gates to perform computational operations.
Just like the classical computer, which uses the logic gates we explored before, the quantum computer uses Qubits to perform those operations.
Many classical logic gates are not reversible, but quantum logic gates are.
Moreover, it is possible to perform classical computing with only reversible gates.

### Applications of a Quantum Computer

Apart from solving computational problems like quantum simulations, quantum annealing, and adiabatic quantum computation, there are more applications for a quantum computer.

#### Cryptography

<img class="section-jumbo" src="https://commithub.s3.us-east-2.amazonaws.com/blog-posts/quantum-computers-explained/crypto.jpg" alt="Cryptography" />

Quantum computers can easily break many of our cryptographic systems by using <a href="https://en.wikipedia.org/wiki/Shor%27s_algorithm" rel="noopener" target="_blank">Shor's Algorithm</a>.
Integer factorization is used for the security of public-key cryptographic systems, and it's believed that it’s unfeasible for classical computers to crack the problem due to computational limitations.
Meanwhile, quantum computers using the aforementioned algorithm can find the factors and solve the problem.

#### Solving Linear Equations

The <a href="https://en.wikipedia.org/wiki/Quantum_algorithm_for_linear_systems_of_equations" rel="noopener" target="_blank">Quantum Algorithm for Linear Systems of Equations</a>
provides a speedup over classical counterparts.

#### Quantum Search

<img class="section-jumbo" src="https://commithub.s3.us-east-2.amazonaws.com/blog-posts/quantum-computers-explained/db.png" alt="Database" />

Using <a href="https://en.wikipedia.org/wiki/Grover%27s_algorithm" rel="noopener" target="_blank">Groover's Algorithm</a> we can perform quadratically fewer queries on a database than a classical computer.
This is a huge optimization advantage that we get using this algorithm.

#### Quantum Supremacy

<img class="section-jumbo" src="https://commithub.s3.us-east-2.amazonaws.com/blog-posts/quantum-computers-explained/google-quantum.jpg" alt="Google's quantum computer" />

This term was introduced by John Preskill to refer to a hypothetical speedup advantage that a quantum computer would have over a classical computer in a given field.
In October 2019, a Sycamore processor created in conjunction with Google AI Quantum was reported to have achieved quantum supremacy.
It provides calculations over 3,000 times faster than those of Summit, generally considered the world's fastest computer.

## Personal Thoughts

<img class="section-jumbo" src="https://commithub.s3.us-east-2.amazonaws.com/blog-posts/quantum-computers-explained/ai.jpg" alt="AI" />

I get excited over the idea that quantum computers are being developed and we need them ever more to achieve scientific milestones.
I don't think AI will evolve much unless quantum computers are involved, because classical can only do so much.
I also don't think we will soon have a commercially available quantum computer owing to how early we are in the field and how expensive these computers are.
Despite the development of classical computers falling increasingly short of Moore's law, consumers keep asking for faster devices, and this could accelerate the development of quantum computers.
I'm very optimistic about the future role of these computers.

## Conclusion

I hope you enjoyed this long read and are excited as me as to the applications of these computers.
It will probably take years until we have more quantum computers around, but at least we have Qiskit to give it a try for ourselves in the meantime.

Happy Coding! 🚀

## Resources

*  <a href="https://en.wikipedia.org/wiki/Digital_Revolution" rel="noopener" target="_blank">Digital Revolution</a>
*  <a href="https://en.wikipedia.org/wiki/Computer" rel="noopener" target="_blank">Classical Computer</a>
*  <a href="https://en.wikipedia.org/wiki/Central_processing_unit" rel="noopener" target="_blank">Central Processing Unit (CPU)</a>
*  <a href="https://en.wikipedia.org/wiki/Binary_number" rel="noopener" target="_blank">Binary Numbers</a>
*  <a href="https://en.wikipedia.org/wiki/Vacuum_tube_computer" rel="noopener" target="_blank">First-generation Computers</a>
*  <a href="https://www.howtogeek.com/367621/what-is-binary-and-why-do-computers-use-it/" rel="noopener" target="_blank">What is binary and how computers use it</a>
*  <a href="https://en.wikipedia.org/wiki/Transistor" rel="noopener" target="_blank">Transistor</a>
*  <a href="https://en.wikipedia.org/wiki/Vacuum_tube" rel="noopener" target="_blank">Vacuum Tubes</a>
*  <a href="https://en.wikipedia.org/wiki/Logic_gate" rel="noopener" target="_blank">Logic Gates</a>
*  <a href="https://en.wikipedia.org/wiki/Moore%27s_law" rel="noopener" target="_blank">Moore's Law</a>
*  <a href="https://en.wikipedia.org/wiki/Quantum_tunnelling" rel="noopener" target="_blank">Quantum Tunneling</a>
*  <a href="https://spectrum.ieee.org/semiconductors/devices/the-tunneling-transistor" rel="noopener" target="_blank">The Tunneling Transistor</a>
*  <a href="https://en.wikipedia.org/wiki/Quantum_computing" rel="noopener" target="_blank">Quantum Computer</a>
*  <a href="https://qiskit.org/" rel="noopener" target="_blank">Qiskit</a>
*  <a href="https://en.wikipedia.org/wiki/Qubit" rel="noopener" target="_blank">Qubit</a>
*  <a href="https://en.wikipedia.org/wiki/Quantum_annealing" rel="noopener" target="_blank">Quantum Annealing</a>
*  <a href="https://en.wikipedia.org/wiki/Shor%27s_algorithm" rel="noopener" target="_blank">Shor's Algorithm</a>
*  <a href="https://en.wikipedia.org/wiki/Grover%27s_algorithm" rel="noopener" target="_blank">Groover's Algorithm</a>
*  <a href="https://en.wikipedia.org/wiki/Quantum_algorithm_for_linear_systems_of_equations" rel="noopener" target="_blank">Quantum Algorithm for Linear Systems of Equations</a>
*  <a href="https://en.wikipedia.org/wiki/Adiabatic_theorem" rel="noopener" target="_blank">Adiabatic Theorem</a>
*  <a href="https://link.springer.com/article/10.1007/BF01343193" rel="noopener" target="_blank">Born and Fock</a>
*  <a href="https://docs.dwavesys.com/docs/latest/c_gs_2.html" rel="noopener" target="_blank">DWAVE</a>
