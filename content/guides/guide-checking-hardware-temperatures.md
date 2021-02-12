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
Occasionally, hardware problems like bluescreens and system or video errors can be related to too high of hardware temperatures. Problems related to hardware temperatures usually appear intermittent, but the usually start to happen after the computer has been running for awhile, or when a resource intensive application has been running for awhile.

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

You will be presented with a screen that shows some diagnostic information. Look at the three areas highlighted in yellow. For desktops The Case Ambient Temp Value column should not be higher than 70C and not higher than the Processor or Video Temp Value. The processor Value temp should not be above 70C, although the Max temp might be close to 70C. Max temps are when the process got to that certain temperature but did not stay there. The Video temp can be a bit higher then the Processor temp, but no more than 90C. 
![cpuid-hwmonitor](/img/guides/checking-hardware-temp/cpuid-hwmonitor.png)

If any of these numbers are beyond the specifications I recommend that the heat issue needs be resolved as soon as possible, otherwise instabilities or hardware damage can occur. I usually perform this service for my customers, but if you don't have the means you can do this yourself, please be aware that opening your case, and not being careful what you touch, can lead to damage. I am not liable for anything you do past this point. The case can be checked for air flow obstructions. If there is a lot of dust in the case, or around the components, it can be blown out using canned air. If there is no, or minimal dust then something else is the problem, thermal past might need to be reapplied (Professional done), or there might be a faulty piece of hardware in your system that needs to be replaced (Professional done). If you have questions about this guide, [contact me](/#contact).