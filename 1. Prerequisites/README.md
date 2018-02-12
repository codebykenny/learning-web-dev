# 1.1 Prerequisites
Lets begin by setting the foundation for your future projects. We are going to set up the ideal enviroment for you to start developing in.

# Contents 
- [1.1. OS Bedrock](#11-os-bedrock)
  - [Windows](#windows)
  - [MacOS](#macos)
  - [Linux ](#linux)
- [1.2 Command Line](#12-command-line)
  - [Installing Dependencies](#installing-dependencies-windowslinux-users-only)
  - [Fundamentals](#fundamentals)

# 1.1 OS Bedrock
Lets get your operating system ready for development.

# Windows
<div align="right">
    <b><a href="#----">:arrow_up: back to top</a></b>
</div>
> Windows 10 finally bridged the gap for developers and introduced a subfile system called "Linux on Windows" so you can finally use the Terminal/Bash on your Windows PC.
>
> We are going to assume you are on the *latest* version of Windows 10.
>
> (The guide for these steps can be found in it's entirety here: https://itsfoss.com/install-bash-on-windows/)

## Step 1: Enable “Windows Subsystem for Linux” feature

Go to Start menu and search for PowerShell. Run it as administrator:

<img src="https://i.imgur.com/0zV9okU.jpg" width="500px">

Once you have the PowerShell running, use the command below to enable Bash in Windows 10.

``` powershell
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux
```

You’ll be asked to confirm your choice. Use Y or press enter:

<img src="https://i.imgur.com/C2g968L.jpg" width="500px">

Now you should be asked to reboot. Even if you are not asked to, you must restart your system.

## Step 2: Download a Linux system from Windows store

Once your system has rebooted, go to Windows Store and search for Linux.

<img src="https://i.imgur.com/WhrznRH.jpg" width="500px">

You’ll see the option to install Ubuntu or SUSE. I have installed Ubuntu for Bash on Windows here

<img src="https://i.imgur.com/3B1ZMJc.jpg" width="500px">

Once you choose the distribution of your choice, you’ll see the option to install it. Do note that it will download files of around 1Gb in size. So you should have a good internet connection here.

<img src="https://i.imgur.com/R4xo7nF.jpg" width="500px">

## Step 3: Run Linux inside Windows 10

You are almost there. Once you have installed, it’s time to see how to access Bash in Windows 10.

Just search for the Linux distribution you installed in the previous step. In my case it was Ubuntu. You’ll see that it runs like a normal Windows application.

It will take some time in installing and then you’ll have to set up the username and password.

<img src="https://i.imgur.com/68KfOKq.jpg" align="right" width="500px">

Don’t worry, it’s just for the first run. Bash shell will be available for use directly from the next time onwards.

Enjoy Linux inside Windows 10.

## Done

For troubleshooting problems please see the bottom section of this guide: https://itsfoss.com/install-bash-on-windows/.

Go to the next section: [1.2 Command Line](#12-command-line)

# MacOS

Setting up your Mac for development is rather simple and you just need to install a few tools.

## Terminal

Your terminal is going to be your new best friend. You can find your Terminal in your Applications/Utilities folder.

Open this up and save it to your Dock to begin setting things up.

## Brew

Brew is a package manager for MacOs. It lets you install tools and utilies with simple commands and its quintessential.

In your terminal type the following to install Brew:

``` bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

Done!

## Git + Developer Tools

We need to install a suite of developer tools on your mac.

Using your Terminal type in:

``` bash
  git --version
```

<img src="https://i.imgur.com/7jvR1dp.jpg" width="500px">

Click Agree to the license agreement. Wait for the Downloading software alert to finish, and click Done. You're good to go.

## Done
Go to the next section: [1.2 Command Line](#12-command-line)

# Linux

Linux systems are usually ready for developers right out of the box. Skip ahead to [1.2 Command Line](#12-command-line) to install your dependencies.

# 1.2 Command Line

This is what being a developers is all about.

# Installing Dependencies (Windows/Linux Users Only)

Depending on what Linux Distro you have, you have a package manager.

Open up your Terminal or Bash(Windows)

To install the Developer Dependencies please run the command that corresponds to your distro:

### Ubuntu/Debian
``` bash
sudo apt-get update

sudo apt-get install build-essential
```

### Fedora/CentOS/RHEL
``` bash
sudo yum update

sudo yum groupinstall "Development Tools" "Legacy Software Development"
```

### Arch Linux
``` bash
sudo pacman -Sy base-devel
```

# Fundamentals
>The command line is the ultimate seat of power on your computer. Using the command line, you can perform amazing feats of wizardry and speed, taming your computer and getting it to do precisely what you want. Unfortunately, the price of this power is complexity: nobody ever said that ruling your computer would be easy.
>
>The command line is, at its heart, simply a place where you type commands to the computer. The computer is your obedient servant, and will attempt to carry out any command that it understands. Unfortunately, the computer does not speak English, or any other language spoken by humans (although it has recognizable elements). In order to give it commands, we must first start learning the language of the computer.

Its imperative that you as a developer become extremely familiar with your Command Line(Terminal). Please take the time to go through this section and at the very least learn the fundamentals of the command-line

Here are a list of tutorials/good reads that I recommend to learn the command line, these are in order of what I deem to be best on top:
- [Getting to Know the Command Line - davidbaumgold](https://www.davidbaumgold.com/tutorials/command-line/#command-syntax)
