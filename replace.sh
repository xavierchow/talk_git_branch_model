#!/bin/sh

source=$1
png_files=$(cat build/asset-manifest.json | grep png | awk ' {print $1 }' | sed -E "s/\"|://g")

for i in "${png_files[@]}"
do
  echo $i
  dotEscaped="${i//\./\\.}"
  escaped="${dotEscaped//\//\\/}"
  echo $escaped 
  sed -i E "s/t\.p\+\"${escaped}/t\.p\+\"\.\.\/${escaped}/" $source
done
