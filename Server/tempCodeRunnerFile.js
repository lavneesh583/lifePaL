app.post('/createDonor', (req, res)=>{
    const query = {
                text: 'CREATE TABLE donorData (d_id VARCHAR PRIMARY KEY, email_id VARCHAR, blood_grp VARCHAR(20) NOT NULL,ph_no INT NOT NULL,d_address VARCHAR(8) NOT NULL, FOREIGN KEY (d_id) REFERENCES hospitalData(donor_id), FOREIGN KEY (d_address) REFERENCES hospitalData(d_address));'
            }
            pool.query(query, (err, res) => {
                if(err){
                    console.log('hello');
                    console.log(err.stack)
                }else{
                    console.log(res);
                }
            }
            );
            res.send('table created');
});