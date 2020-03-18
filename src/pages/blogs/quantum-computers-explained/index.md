---
    path: '/quantum-computers-explained'
    title: Quantum Computers Explained
    author: Luis Alvarez
    authorImage: 'https://commithub.s3.us-east-2.amazonaws.com/blog-posts/author/luis.jpg'
    date: '2020-03-04'
    description: Deep dive at what are quantum computers and what can they offer
    categories: [Technology Explained]
    backgroundImg: 'https://commithub.s3.us-east-2.amazonaws.com/blog-posts/quantum-computers-explained/quantum.jpg'
    published: true
---

Computers are a tool that have transformed the way we work from storing information, better processes to work with that data and allowing us to easily share the data.
The conception of this amazing tool started the <a href="https://en.wikipedia.org/wiki/Digital_Revolution" rel="noopener" target="_blank">Digital Revolution</a>.
This lead to a race to make computers more friendly to the consumer by reducing their size as years go by.
Now in 2020 we have smartphones that have 12GB of RAM and a processor that runs at 2.5GHz.
It's truly phenomenal all the progress we have made but technology has a limit.
Let's explore first what is the classical computer to get an understanding on why quantum computers were conceived.

## Classical Computer

<img class="section-jumbo" src="https://commithub.s3.us-east-2.amazonaws.com/blog-posts/quantum-computers-explained/macintosh.jpg" alt="Macintosh" />

A classical <a href="https://en.wikipedia.org/wiki/Computer" rel="noopener" target="_blank">computer</a> or just computer
(It's called classical to identify that it's a standard computer and not a quantum computer) it's a device that follows instructions to achieve a task.
With computer programming we can create logical operations pretty much telling the computer what to do and in what order.
Programs are a result of that programming that when run it follows the operations specified in the program.
The early applications of a computer were for simple calculations and in essence even computers today are just a bunch of simple calculations.

### CPU

<img class="section-jumbo" src="https://commithub.s3.us-east-2.amazonaws.com/blog-posts/quantum-computers-explained/cpu.jpg" alt="CPU" />

Classical computers typically have a <a href="https://en.wikipedia.org/wiki/Central_processing_unit" rel="noopener" target="_blank">Central Processing Unit (CPU)</a>.
The CPU is in charge of carrying out arithmetic, logical, controlling and input/output (I/O) operations specified on the instructions.
Modern CPUs are microprocessors, where the CPU is contained on a single metal-oxide-semiconductor (MOS) integrated circuit (IC) chip.
Computers don't understand words or numbers the way humans do and at the lowest level everything is represented by a binary electrical signal that registers two states: on and off.
The CPU is one of the pieces that takes complicated data and decodes it into binary.

### Binary

<img class="section-jumbo" src="https://commithub.s3.us-east-2.amazonaws.com/blog-posts/quantum-computers-explained/binary.jpg" alt="Binary" />

<a href="https://en.wikipedia.org/wiki/Binary_number" rel="noopener" target="_blank">Binary Numbers</a> is a number expressed in a base-2 numeral system.
Usually 0 (zero) and 1 (one). Computers use binary because in the early days of computers electrical currents were harder to measure and control very precisely.
Having an "on" state represented by a negative charge and an "off" state represented by a positive charge made more sense.
The reason why the "on" state is represented by a negative charge is because electrons are represented by a negative charge.
More electrons means more current with a negative charge. In binary we represent the "on" state with a 1 and the "of" state with a 0.
The early computers were way bulkier that what we have now but we've kept the same fundamental principles.

### Transistors

<img class="section-jumbo" src="https://commithub.s3.us-east-2.amazonaws.com/blog-posts/quantum-computers-explained/transistors.png" alt="Transistors" />

A <a href="https://en.wikipedia.org/wiki/Transistor" rel="noopener" target="_blank">Transistor</a> is a semiconductor device used to amplify or switch electronical signals and electrical power.
It's composed by semiconductor material usually with at least three terminals to connect to an external circuit.
Transistors act like a switch turning on and off the current. This is where binary comes in.
The transistor is a fundamental building block for all electronics making devices smaller and cheaper to manufacter revolutionizing the world of electronics paving the way for smaller smaller computers.
Compared to the <a href="https://en.wikipedia.org/wiki/Vacuum_tube" rel="noopener" target="_blank">Vacuum Tubes</a>, transistors are smaller and require less power to operate.
Transistors are primarily used in the CPU to perform mathematical calculation and a series of transistors may also be used as a
<a href="https://en.wikipedia.org/wiki/Logic_gate" rel="noopener" target="_blank">Logic Gate</a> when performing logical operations.
Modern CPUs contain millions of transistors that are microscopic in size.

### Moore's Law

<img class="section-jumbo" src="https://commithub.s3.us-east-2.amazonaws.com/blog-posts/quantum-computers-explained/mooreslaw.png" alt="Moore's Law Graph" />

<a href="https://en.wikipedia.org/wiki/Moore%27s_law" rel="noopener" target="_blank">Moore's Law</a> is the observation that the number of transistors in a integrated circuit doubles every two years.
The observation was named after Gordon Moore, the co-founder of Fairchild Semiconductor and was CEO of Intel. Moore's prediction proved accurate for several decades and has been used in the
semiconductor industry to guide long-term planning and to set targets for research and development (R&D). Moore's law is an observation and projection of a historical trend but it's not
a physical or natural law. The rate held steady from 1975 until around 2012.

### Limitations of the Classical Computer

Moore's Law has held strong over the years making transistors smaller and smaller to fit into a CPU.
Transistors have gotten as small as 10 nanometers, that the channel that carries the electrical current through the transistor cannot always contain it.
The trend is already starting to slow down because we face a physical limitation due to <a href="https://en.wikipedia.org/wiki/Quantum_tunnelling" rel="noopener" target="_blank">Quantum Tunneling</a>.

## Quantum Computer

<img class="section-jumbo" src="https://commithub.s3.us-east-2.amazonaws.com/blog-posts/quantum-computers-explained/google-quantum.jpg" alt="Google's quantum computer" />

A <a href="https://en.wikipedia.org/wiki/Quantum_computing" rel="noopener" target="_blank">Quantum Computer</a> is the application of the quantum-mechanical phenomena such as superposition and entanglement to perform computation.
They use a <a href="https://en.wikipedia.org/wiki/Qubit" rel="noopener" target="_blank">Qubit</a> to hold quantum information.
Similar to the bit in a classical computer a qubit will result on a 1 or a 0 but the general state according to quantum mechanics can be a superposition of both.
When you measure a classical bit the state won't be disturb.
It can only be a 1 or a 0 but when you measure a qubit it destroys the superposition state.
Before being observed there is no way to tell if a qubit is 1 or a 0.

A qubit can hold more information, up to two bits using superdense coding.
They also exhibit an effect called quantum entanglement allowing qubits to express a higher correlation than classical systems.
This effects make quantum computers very efficient to do very intensive calculations that a classical computer will take too long to perform.


A quantum computer can be divided into two categories:

### Analog

This approach can be further divided into quantum simulation, quantum annealing, and adiabatic quantum computation.

#### Quantum Simulations

Classical computers have a hard time simulating quantum mechanics and by using quantum simulators we can study the phenomena more accurately,
Running a simulation is not as efficient as running an actual quantum computer but it's a start to study the technology and it's applications.
A great example of a quantum simulator is <a href="https://qiskit.org/" rel="noopener" target="_blank">Qiskit</a> where you run a simulation of a quantum computer through your classical computer.

#### Quantum Annealing

In essence <a href="https://en.wikipedia.org/wiki/Quantum_annealing" rel="noopener" target="_blank">Quantum Annealing</a> is finding the low-energy states of a problem.
In optimization problems we search for the best of many possible combinations.
A fundamental rule in physics is that everything tends to seek a minimum energy state.
This is also true for quantum physics.
By using physics we can frame these sort of problems as energy minimization problems.
In a sampling problem for many low-energy states and characterizing the shape of the energy landscape is useful for machine learning problems to create a probabilistic model of reality.
One company that uses quantum annealing is DWAVE and you can <a href="https://docs.dwavesys.com/docs/latest/c_gs_2.html" rel="noopener" target="_blank">read about it more here</a>.

#### Adiabatic Quantum Computation

This is closely related to quantum annealing but it uses the adiabatic theorem to do calculations.
This concept states this:

```
A physical system remains in its instantaneous eigenstate if a given perturbation is acting on it slowly enough and if there is a gap between the eigenvalue and the rest of the Hamiltonian's spectrum.
```

In simpler terms when a quantum mechanical system it's subjected to gradually changing external conditions it adapts it's functional form.
When you subject the system to rapidly varying conditions there is insufficient time for the functional form to adapt, so the spatial probability density remains unchanged.


### Digital

A digital quantum computer uses quantum logic gates to perform computational operations. Just like the classical computer logic gates we explored before the quantum computer uses Qubits to perform those operations
Many classical logic gates are not reversible but quantum logic gates are. However, it is possible to perform classical computing with only reversible gates.

### Applications of a Quantum Computer

Apart from solving computational problems like quantum simulations, quantum annealing, and adiabatic quantum computation there are more applications for a quantum computer.

#### Cryptography

Quantum computers can easily break many of our cryptographic systems by using <a href="https://en.wikipedia.org/wiki/Shor%27s_algorithm" rel="noopener" target="_blank">Shor's Algorithm</a>.
Integer factorization it's used for the security of public key cryptographic systems and it's believed that classical computers find it unfeasible to crack the problem due to computational limitations.
Meanwhile, quantum computer using that algorithm can find the factors and solve the problem.

#### Solving Linear Equations

The <a href="https://en.wikipedia.org/wiki/Quantum_algorithm_for_linear_systems_of_equations" rel="noopener" target="_blank">quantum algorithm for linear systems of equations</a>
provides a speedup over classical counterparts.

#### Quantum Search

Using <a href="https://en.wikipedia.org/wiki/Grover%27s_algorithm" rel="noopener" target="_blank">Groover's Algorithm</a> we can perform quadratically fewer queries on a database than a classical computer.
This is a huge optimization advantage that we get using this algorithm.

#### Quantum Supremacy

This term was introduced by John Preskill to refer to a hypothetical speedup advantage that a quantum computer would have over a classical computer in a given field.
In October 2019, a Sycamore processor created in conjuction with Google AI Quantum was reported to have achieved quantum supremacy.
It has calculations over 3,000 as fast as those of Summit, generally considered the world's fastest computer.

### Personal Thoughts

I get excited over the idea that quantum computers are being developed and we need them more and more to achieve scientific milestones.
I don't think AI will evolve much unless quantum computers are involved because classical can only do so much.
I also don't think we will soon have a commercially available quantum computer due to how early we are in the field and how expensive this computers are.
As Moore's law keeps getting slower consummers will keep asking for faster devices and this could accelerate the development of quantum computers.
I'm very optimistic on the future and the role of this computers in it.

## Conclusion

I hope you enjoyed this long read and are excited as me as to the applications of these computers.
It will probably take years until we have more computers around but at least we got Qiskit to give it a try ourselves.

Happy Coding! 🚀

## Resources

*  <a href="https://en.wikipedia.org/wiki/Digital_Revolution" rel="noopener" target="_blank">Digital Revolution</a>
*  <a href="https://en.wikipedia.org/wiki/Computer" rel="noopener" target="_blank">Computer</a>
*  <a href="https://en.wikipedia.org/wiki/Central_processing_unit" rel="noopener" target="_blank">Central Processing Unit (CPU)</a>
*  <a href="https://en.wikipedia.org/wiki/Binary_number" rel="noopener" target="_blank">Binary Numbers</a>
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
*  <a href="https://en.wikipedia.org/wiki/Quantum_algorithm_for_linear_systems_of_equations" rel="noopener" target="_blank">quantum algorithm for linear systems of equations</a>
