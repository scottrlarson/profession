+++
title = "Update Vrm Performance"
date = 2021-04-29T10:49:28-07:00
draft = true

# Tags and categories
# For example, use `tags = []` for no tags, or the form `tags = ["A Tag", "Another Tag"]` for one or more tags.
tags = []
categories = []

# Featured image
# Place your image in the `static/img/` folder and reference its filename below, e.g. `image = "example.jpg"`.
[header]
image = ""
caption = ""

+++

Skip to content
What is VRM and How it Affects CPU Performance
By John Perkins / Feb 17, 2021 / Hardware

For how easy it is to build a computer, we often don’t appreciate the electrical engineering that takes place to make that happen. For example, how does the motherboard manage the way your CPU gets power? Through a Voltage Regulator Module (VRM). But what is a VRM and how does it affect your CPU performance? Here we answer those questions.
What Is a VRM?

Your motherboard’s VRM is a crucial but underappreciated series of electronic components that ensure your CPU or GPU receives clean power at a consistent voltage.

A poor VRM can lead to degraded performance and limit a processor’s ability to function under load. It can even lead to unexpected shutdowns, especially when overclocking.
How Does a VRM Work?

A VRM’s first job is to convert the 12-volt power from your computer’s power supply down to a usable voltage. For processors, this is typically between 1.1V to 1.3V. The delicate electronics inside can be easily shorted by too many volts. Precision is also crucial when powering a processor, and the required voltage must be delivered as exactly as possible. That’s why VRMs are more complex than a simple piece of wire. But at their heart they are basically a buck converter, precisely stepping down voltage to appropriate levels.

The VRM uses three components to do its job: MOSFETs, inductors (also called chokes), and capacitors. There’s also an integrated circuit (IC) to control it all, sometimes called a PWM controller. A simplified schematic of a single-phase VRM can be found below.
what-is-a-vrm-single-phase-basic-vrm-schematic

A more detailed discussion of each component’s function can be found on WikiChip’s VRM page.
Multi-Phase VRMs

Modern computers require more than a single phase VRM. Modern power systems use a multi-phase VRM. Multiple phases spread the power load over a broader physical area, reducing heat production and stress on components as well as providing other electrical improvements related to efficiency and per-part costs.
what-is-a-vrm-multi-phase-vrm-schematic

Each phase of a modern multi-phase VRM supplies a fraction of the power required, taking turns to provide power to the CPU. Taken individually, each phase provides a brief moment of power, visualized as a square-shaped wave.
what-is-a-vrm-multi-phase-vrm-staggered-phase-square-waves

Each phase’s burst of power is staggered from the last, so that while only one phase is operating at a time, the total amount of power never changes. This, in turn, produces a smooth, reliable power source – the “clean” power required for a CPU to function optimally. You can see a simplified system in operation below.
what-is-a-vrm-multi-phase-vrm-multi-phase-vrm-overview
VRM Phase Numbering and Truth in Advertising

VRMs are typically sold as something like “8+3” or “6+2.” The number before the plus indicates the number of phases dedicated to cleaning power for the CPU. The number after the plus indicates the VRM phases left to power other motherboard components like RAM.

When the first number is greater than 8, such as “12+1,” “18+1,” or even higher, the manufacturer often makes use of a device called a doubler. A doubler allows them to multiply the benefit of the existing phases without building additional phases into the board. While this isn’t quite as effective as wholly separated phases, it does allow for some electrical improvements at a lesser cost. And since it allows manufacturers to raise a buyer-facing number at small expense to themselves, they often take advantage.
How Does a VRM Improve Performance?

The goal with a VRM is the provision of clean and reliable power. Yet even a basic VRM can deliver sufficient performance to maintain a mid-range CPU at stock speeds. When overclocking or pushing component limits, the quality of the VRM becomes more important.
gigabyte-motherboard-vrm-diagram

Overclockers should seek out a VRM made from reliable components. If its components are cheap, they may fail to supply sufficient voltage under load, causing surprise shutdowns. The most variable components are capacitors and chokes.

Look for leak-resistant capacitors. These are often marketed under names like “Japanese Capacitors,” “Dark Capacitors,” or “Solid Capacitors.” High overclocks will require better chokes as well. You can find this named as super-ferrite chokes (SFCs) or “Premium Alloy Chokes.” Also look for heatsinks over some or all MOSFETs – finned, if possible.

Additionally, those who are using higher-powered CPUs, like Threadripper CPUs, should ensure that they’re getting a good-quality VRM on their motherboards. Many manufacturers are prepared for Threadripper in this respect, but with CPUs that power hungry, it’s super important to make sure you can get clean power as often as possible.
Conclusion

Even with knowledge, it can be difficult to shop for a capable VRM. Cost is little guide, and marketing material, as mentioned, can be intentionally misleading. Detailed information about component and part numbers is rarely revealed to consumers. It is best to do your own research before you get one.

If you enjoyed this writeup on VRM and how it can affect CPU performance, make sure to check out some of our other hardware content, like our guide on prioritizing upgrades for your PC, or our writeups on vsync and screen resolution before you buy your next monitor.

