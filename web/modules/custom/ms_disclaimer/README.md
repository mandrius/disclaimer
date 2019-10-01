# Installation
Just put `ms_disclaimer` folder into your `modules/custom` directory and enable it 
by running terminal command `drush en ms_disclaimer`.

# Usage
* For your selected Content type create new `Entity reference` field named `Disclaimer` and select 'Disclaimer' as allowed content type.
* Change this field display by clicking on `Manage display` and selecting `Render entity` as a format. Select `Teaser` as a view mode.
* Create as many Disclaimer nodes as you might need.
* Create new node for the content type you made these configurations and select `Disclaimer node` from the list.

# Notes
* This module contains `Disclaimer` content type config files which are being executed after module install.
* Cookie is stored for 1 year (`3600 * 1000 * 24 * 365`).
* Cookie variable looks like this `disclaimer_<NID>`.
* Cookie value is equal to `1`.

# Dependencies
* Rabbit hole (https://www.drupal.org/project/rabbit_hole)

# Uninstall
If you want to uninstall this module you can do it by using terminal command `drush pm-uninstall ms_disclaimer`.