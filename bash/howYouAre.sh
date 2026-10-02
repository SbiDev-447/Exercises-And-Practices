#!/bin/bash

# Pasamos a la variable usuario el output del comando whoami (whoami is to identify which user it is)
usuario=$(whoami)

# Hacemos IF-ELSE para ir pasando por las opciones (sbi is my user you change for your user)
if [ "$usuario" == "root"]; then
  echo "Eres el root"
elif [ "$usuario" == "sbi"]; then
  echo "Eres Usuario mi pa"
else
  echo "ninguno pepe"
fi
