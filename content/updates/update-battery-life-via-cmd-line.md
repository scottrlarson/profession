+++
title = "How to check Battery level via Command line"
date = 2020-02-13T09:00:53-08:00
draft = false

# Tags and categories
# For example, use `tags = []` for no tags, or the form `tags = ["A Tag", "Another Tag"]` for one or more tags.
tags = ["Windows 10","Battery Life"]
categories = ["Guides"]

# Featured image
# Place your image in the `static/img/` folder and reference its filename below, e.g. `image = "example.jpg"`.
[header]
image = "updates/update-battery-life-via-cmd-line/battery-indicator.png"
caption = ""

+++
Sometimes, the battery indicator in Windows 10 stops working, fails to respond, or disappears. In this case you might need to check your battery life, until that problem gets fixed. 

## Check Battery level using command line

Open Windows Command Prompt and execute the following command:

![Command Line Window: WMIC Command Screenshot](/img/updates/update-battery-life-via-cmd-line/cmd-line-WMIC-command.png)
    
    WMIC PATH Win32_Battery Get EstimatedChargeRemaining

The output for that command would look something like this:

> EstimatedCharge
> 
> Remaining 

You can see the estimated battery charge remaining. 

In my next update I will show you a possible fix to this problem.