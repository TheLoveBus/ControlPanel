#!/bin/sh

DIR=`dirname $0`

cd "$DIR"

npm start > /dev/null &
