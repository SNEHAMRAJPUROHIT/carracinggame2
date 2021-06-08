class Form{
    constructor(){
        this.input=createInput("ENTER NAME")
        this.button =createButton("login")
        this.greeting=createElement("h1")
    }
    hide(){
        this.input.hide()
        this.button.hide()
        this.gretting.hide()
    }
    display(){
        var title=createElement("h1")
        title.html("CAR RACING GAME")
        title.position(300,100)
       
        this.input.position(350,160)
      
        this.button.position(400,200)
        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            
            player.name=this.input.value()
            playerCount+=1
            player.updateCount(playerCount)
            this.greeting.html("WELCOME "+player.name)
           this. greeting.position(350,160)
        })
    }

}