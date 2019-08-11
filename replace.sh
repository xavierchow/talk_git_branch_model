#!/bin/sh

source=$1
png_files=($(cat build/asset-manifest.json | grep png | awk ' {print $2 }' | sed -E "s/\"|,//g"))

for i in "${png_files[@]}"
do
  # echo $i
  file=$(basename "$i")
  echo $file
  escaped="${file//\./\\.}"
  # echo $escaped 
  # echo "s/\"static\/media\/${escaped}/\"\.\.\/static\/media\/${escaped}/"
  sed -i -e "s/\"static\/media\/${escaped}/\"\.\.\/static\/media\/${escaped}/" $source
done
