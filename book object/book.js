function theHobbit(title, author, pages, read)
{
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    
    this.info = function()
    {
        return this.title + " by " + this.author + " , " + this.pages + " pages, " + this.read
    }


}
/*theHobbit.prototype.readOrNot = function() 
{
    if (this.read === true)
    {
        console.log("already read.");
    }
    else if (this.read === false)
    {
        console.log("not read yet.");
    }
}*/

const book = new theHobbit("The Hobbit",  "J.R.R. Tolkien", 295, "not read yet.")
console.log(book.info());