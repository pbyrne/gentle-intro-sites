A Gentle Introduction to Building Your Own Static Sites
=======================================================

This contains some sample [Middleman]-generated static sites which I deploy to the servers managed by the [demo code][gentle-intro] for my presentation, A Gentle Introduction to Running Your Own Server.

[gentle-intro]:https://github.com/pbyrne/gentle-intro
[middleman]:http://middlemanapp.com/

Getting Started
---------------

1. `bundle` to install the Ruby dependencies
2. Navigate into any site's directory.
3. Rake tasks deploy to a locally running Vagrant box or to a production server:
    * `rake release` to deploy to production
    * `rake stage` to deploy to the local VM
