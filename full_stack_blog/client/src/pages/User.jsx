import React from 'react'
import Post from '../components/Post'


let posts=[{author:"Lorem", text: "ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et mi dictum, posuere odio sed, finibus sapien. Donec condimentum vitae libero semper gravida. Cras porta lectus ex, vel tempus eros elementum elementum. Nulla varius scelerisque tempor. Aliquam vehicula enim lorem, pellentesque cursus diam tristique sit amet. In hac habitasse platea dictumst. Vestibulum euismod, nulla eu viverra ultrices, metus odio tristique eros, in efficitur nunc justo ut sapien."},

    {author:"Interdum", text: "et malesuada fames ac ante ipsum primis in faucibus. Morbi porta ut nulla eu venenatis. Aliquam convallis interdum risus, et fringilla eros feugiat eget. Ut ut mollis felis. In a sodales leo, quis lacinia lectus. Nam dignissim ante non mi blandit, pellentesque maximus erat vehicula. Sed eu aliquam odio, eu dictum lectus. Morbi iaculis et lorem non consectetur. Quisque at arcu in purus consectetur sodales eget a nisl."},
    
    {author:"Sed", text: "at metus non eros vulputate interdum. Sed consectetur vel nulla non vulputate. Aenean condimentum condimentum nulla eu rutrum. Duis in commodo ante. Proin ullamcorper iaculis eleifend. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi congue augue maximus, rhoncus justo vulputate, iaculis augue. Curabitur malesuada nisi nisi, eget aliquet urna mollis vel. Duis non enim a libero rutrum elementum ut nec justo. Etiam ultricies mi orci, vel iaculis velit fringilla nec. Donec eleifend sodales libero, volutpat dapibus dui consectetur sit amet. Curabitur tempor enim a ipsum malesuada hendrerit."},
    
    {author:"Cras", text: "elementum lacinia diam non pharetra. Fusce egestas porttitor ante in vestibulum. Donec nec justo sem. Nulla ac nunc vel ipsum viverra cursus eu eget enim. Donec dapibus vitae mauris ut aliquet. Praesent est ligula, vestibulum id luctus vel, gravida vel diam. Nunc quis tortor quis purus molestie luctus sed sit amet urna. Proin eget justo massa. Donec sed auctor metus. Praesent fringilla, lacus non sollicitudin vulputate, quam justo rhoncus augue, egestas maximus turpis ligula quis est. Sed euismod euismod ultrices. Duis viverra pulvinar arcu in ultricies. Phasellus mattis rutrum vulputate. Sed metus nisl, consectetur non feugiat nec, lobortis porttitor orci."},
    
    {author:"Phasellus", text: "porttitor sem lobortis rutrum varius. Vestibulum pharetra a neque vel suscipit. Morbi posuere lorem est, id viverra magna mollis in. Sed dictum a odio sed tristique. Donec dapibus nunc aliquet dolor mollis finibus. Pellentesque arcu nisl, pulvinar id dignissim ac, convallis laoreet nulla. In euismod id tortor nec consequat."},
]

 function User() {
    return <div>
        <h1>User</h1>
        {posts.map((post,id)=><Post key={id} {...post}/>)}
        </div>
    
}
export default User