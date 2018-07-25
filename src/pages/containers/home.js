import React from 'react'
import HomeLayout from '../components/home-layout'
import Categories from '../../categories/componets/categories'
import RelatedLayout from '../components/related-layout'
import ModalContainer from '../../widgets/containers/modal-container'
import Modal from '../../widgets/components/modal'
import HandleError from '../../errors/containers/handle-error'
import VideoPlayer from '../../player/containers/video-player-container'
import { connect } from 'react-redux'

class Home extends React.Component {
  state = {
    modalVisible: false
  }

  handleOpenModal = media => {
    this.setState({
      modalVisible: true,
      media
    })
  }

  handleCloseModal = (event) => {
    this.setState({
      modalVisible: false
    })
  }

  render() {
    return (
      <HandleError>
        <HomeLayout>
          <RelatedLayout/>
          <Categories
            categories={this.props.categories}
            handleOpenModal={this.handleOpenModal}
            search={this.props.search}
          />
          {
            this.state.modalVisible &&
            <ModalContainer>
              <Modal handleCloseClick={this.handleCloseModal}>
                <VideoPlayer
                  autoplay
                  src={this.state.media.src}
                  title={this.state.media.title}
                />
              </Modal>
            </ModalContainer>
          }
          </HomeLayout>
      </HandleError>
    )
  }
}

const mapStateToProps = (state, props) => {
  const categories = state.dataReducer.categories.map((categoryId) => {
    return state.dataReducer.entities.categories[categoryId]
  })

  return {
    categories,
    search: state.dataReducer.search
  }
}

export default connect(mapStateToProps)(Home)
