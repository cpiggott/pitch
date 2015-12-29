#!/bin/sh -e

export NODE_ENV=development
export HOSTNAME=localhost:$PORT
export GETCONFIG_ROOT=./config
export DEBUG=pitch,pitch:server,pitch:browserify