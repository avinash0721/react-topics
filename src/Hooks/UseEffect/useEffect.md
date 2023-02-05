1. useEffect( ( ) => {} )
   1a. it will execute every time when the component is render/re-render/mount

2. useEffect( ( ) => { },[] )
   2a. it will execute only when component is mounted

3. useEffect( ( ) => { },[state1,state2] )
   3a. it will executes only when dependencies are changed

4. useEffect( ( ) => { return()=>{} },[] )
   4a. it will execute only when component is Un-mounted (Ex: remove eventListners removing db connections)
