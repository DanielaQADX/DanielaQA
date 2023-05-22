describe('Api Automation Test', () => {
  it('Post creat', () => {
    cy.request({
      method: "POST",
      url: "https://sonaefs-pp.azure-api.net/uws-authenticationHub/v1/acsAReq",
      body: {
    "messageID": "teste12345699",
          "fields": {
            "CLIENT_F_I": "string",
            "CARD_PAN": "5182********4629",
            "CARD_ID": "46515060",
            "CARD_CBSNUMBER": "50000004004270",
            "OTP": "123456",
            "DS_TX_ID": "teste12345699",

          }
        
        }
          
        }).then((response) => {
          cy.log(JSON.stringify(response))
      expect(response.status).to.eq(200);
      expect(response?.body?.fields?.authenticationMethod).to.eq('3c');

    })
  })
})
