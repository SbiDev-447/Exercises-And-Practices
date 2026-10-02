#!/bin/bash

usuario=$(whoami)

if [ "$usuario" == "root"]; then
  echo "Eres el root"
elif [ "$usuario" == "sbi"]; then
  echo "Eres Usuario mi pa"
else
  echo "ninguno pepe"
fi
