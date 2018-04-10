#!/bin/bash

add()
{
	X=${1:-5}
	Y=${2:-6}

	echo "$X + $Y = $(($X+$Y))" 
}

add $1 $2
