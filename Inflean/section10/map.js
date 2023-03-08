  let m = new Map();
  m.set('하나',1);
  m.set(1,'하나');
  m.set(true,1);
  m.set(false,0);
  console.log(m.get('하나'))
  console.log(m.has(false))
  console.log(m.delete(false))
  console.log(m.has(false))

  for (variable of m) {
    console.log(`순회---> ${variable[0]}` )
  }
  console.log(m.keys())
  console.log(m.values())
  console.log( m.entries())
  
 let temp = new Map([
  [1,10],
  [2,10],
  [3,10],
  [4,10],
])
console.log(temp)

