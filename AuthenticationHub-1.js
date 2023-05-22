describe('Api Automation Test', () => {
  it('Post creat', () => {
    cy.request({
      method: "POST",
      url: "https://sonaefs-pp.azure-api.net/uws-authenticationHub/v1/acsAReq",
      body: 	{
        "messageID":"1870261-1-00000000AYAYeEYJ",
	  "fields":{
	    "CLIENT_F_I":"Sonae",
	    "CARD_PAN":"517112******9895",
	    "CARD_ID":"46386641",
	    "CARD_CBSNUMBER":"50000042131801",
	    "OTP":"534823",
	    "DS_TX_ID":"7c8c961f-dbaf-4872-8113-cb6634958b6c",

        }
      }
    
          
      }).then((response) => {
        cy.log(JSON.stringify(response))
    expect(response.status).to.eq(200);
    expect(response?.body?.fields?.authenticationMethod).to.eq('1');

    })
  })
})
