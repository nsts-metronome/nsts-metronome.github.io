#!/usr/bin/expect

eval spawn bin/deploy.sh
expect "Enter passphrase for key '/home/travis/.ssh/id_rsa':"
send "\n"
interact
