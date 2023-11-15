for (let i = 0; i <= 2; i += 0.2) {
  for (let j = i+1; j <= i+3; j += 1) {
      if( Number.isInteger(i) || Number.isInteger(j) )
    console.log("I="+Math.round(i) + " J="+Math.round(j));
    else     console.log("I="+parseFloat(i.toFixed(1)) + " J="+parseFloat(j.toFixed(1)))

  }
}
