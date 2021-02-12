+++
title = "How to Check PC Hardware Temperatures"
date = 2021-02-11T16:02:41-08:00
draft = false

# Tags and categories
# For example, use `tags = []` for no tags, or the form `tags = ["A Tag", "Another Tag"]` for one or more tags.
tags = []
categories = []

# Featured image
# Place your image in the `/img/` folder and reference its filename below, e.g. `image = "example.jpg"`.
[header]
image = ""
caption = ""

+++
**You alone are responsible and liable for any action you take as a result of reading this information.**

Occasionally, hardware problems like bluescreens and system or video errors can be related to too high of hardware temperatures. Problems related to hardware temperatures usually appear intermittent, but they usually start to happen after the computer has been running for awhile, or when a resource intensive application has been running for awhile.

This guide aims to show you how to identify heat problems with your computer to rule out hard to troubleshoot system errors. This guide assumes you are using Firefox to download this tool. If you are using another browser, the download part will be different.

## 1. Start by downloading CPUID's hardware monitor tool. 
![hwmonitor-google-search](/img/guides/checking-hardware-temp/hwmonitor-google-search.png)
![hwmonitor-softwares-cpuid](/img/guides/checking-hardware-temp/hwmonitor-softwares-cpuid.png)
![downloading-hwmonitor](/img/guides/checking-hardware-temp/downloading-hwmonitor.png)
![opening-hwmonitor](/img/guides/checking-hardware-temp/opening-hwmonitor.png)

## 2. Open and Run the HWMonitor Installer
![downloads](/img/guides/checking-hardware-temp/downloads.png)
![open-file-security-warning](/img/guides/checking-hardware-temp/open-file-security-warning.png)

## 3. Run through the installation of the product and run the application

You will be presented with a screen that shows some diagnostic information. Look at the three areas highlighted in yellow. 

**For Desktops[^Desktop]** The **Case Ambient Temp**[^CaseAmbientTemp] **Value** should not be higher than 70C and not higher than the Processor or Video Temp **Value**[^Value]. The **Processor Temp[^ProcessorTemp]** **Value** should not be above 70C, although the **Max Temp[^MaxTemp]** might be close to 70C. The **Video Temp[^VideoTemp]** Value can be a bit higher then the Processor Temp Value, but no more than 90C. 

**For Laptops**, because of the less space between parts, are typically designed to run much warming than the temperatures I specified for Desktops. Add 20C-40C to each number for laptops. So for Laptops, The **Case Ambient Temp** Value column should not be higher than 90C and not higher than the Processor or Video Temp Value. The **Processor Temp** Value should not be above 90C, although the Max temp might be close to 120C. The **Video Temp** Value can be a bit higher then the Processor temp, but no more than 120C. 
![cpuid-hwmonitor](/img/guides/checking-hardware-temp/cpuid-hwmonitor.png)

If any of these numbers are beyond the specifications I recommend having your device serviced ASAP. Otherwise instabilities or hardware damage can occur. I usually perform this service for my customers, but if you don't have the means, you can do some analysis yourself. Please be aware that opening your case, and not being careful what you touch, can lead to damage. The case can be checked for air flow obstructions. If there is a lot of dust in the case, or around the components, it can be blown out using canned air. If there is no, or minimal dust then something else is the problem, thermal paste might need to be reapplied to the processor (Professional done), or there might be a faulty piece of hardware in your system like a improperly functioning fan that needs to be replaced (Professional done). If you have questions about this guide, [contact me](/#contact).

## Terms

[^Desktop]: A Desktop computer is a Tower based computer.
[^CaseAmbientTemp]: The Case Ambient Temperature is the overall temperature that exists inside the case resulting from the heat that all the hardware components give off. If the ambient temperature is too high, that heat will increase the temperature of the resulting hardware components, causing instability and hardware damage.
[^Value]: The current temperature value.
[^MaxTemp]: The Max temperature column displays the highest number measurement of temperature at one point, but did not stay there.
[^ProcessorTemp]: The CPU or processor, which is the brain of your computer. Knowing the temperatures of the processor is important because if it gets to high, the processor has a sensor that will trigger an immediate shutdown of the computer.
[^VideoTemp]: The Video Temperature section  measures the Graphics Processing Unit. The GPU drives your monitor or display. Know the temperature of the GPU can help you troubleshooting video glitches or system errors related to the GPU.
