module.exports = app => { 
    
app.get('/agendamento', (req, res) => 
    res.send('Get Agendamento Felipe')
) 
    
app.post('/agendamento', (req, res) => {
    console.log(req.body); 
    res.send('Post Agendamento Fujioka') }     
)}