import React from "react";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Items from "./components/Items";
import Categorys from "./components/Categorys";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: "Chair gray",
          img: "chair-gray.jpg",
          desc: "the best chair in the world",
          category: "chairs",
          price: "49.99"
        },

        {
          id: 2,
          title: "Table",
          img: "table.jpg",
          desc: "the best table in the world",
          category: "tables",
          price: "149.99"
        },

        {
          id: 3,
          title: "Sofa",
          img: "sofa.jpg",
          desc: "the best sofa in the world",
          category: "sofas",
          price: "549.99"
        },

        {
          id: 4,
          title: "Wall-light",
          img: "wall-light.jpeg",
          desc: "the best wall-lights in the world",
          category: "lights",
          price: "25.0"
        },

        {
          id: 5,
          title: "Chair white",
          img: "chair-white.jpg",
          desc: "the best chair in the world",
          category: "chairs",
          price: "49.99"
        },
        
        {
          id: 6,
          title: "sofa white",
          img: "whiteSofa.jpg",
          desc: "the best sofa in the world",
          category: "sofas",
          price: "679.99"
        }
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.chooseCategory = this.chooseCategory.bind(this)
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
      return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Categorys chooseCategory={this.chooseCategory} />
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />

        {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}
        <Footer />
      </div>
    )
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({
      showFullItem: !this.state.showFullItem
    })
  }

  chooseCategory(category) {
    if(category === 'all') {
      this.setState({
        currentItems: this.state.items
      })
      return
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
        isInArray = true
    })
    if(!isInArray)
  this.setState({orders: [...this.state.orders, item]})
  }
}

export default App