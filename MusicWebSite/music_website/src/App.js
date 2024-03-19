import './App.css';
import {useState} from "react";
import { Button, Divider, Card} from 'semantic-ui-react'


function App() {

  const albumsData = [
    {
      id: 1,
      title: 'Happier Than Ever',
      cover: 'https://cdn1.ozone.ru/s3/multimedia-4/6088199500.jpg',
      songs: [
        'Getting Older',
        'I Didn\'t Change My Number',
        'Billie Bossa Nova',
        'my future',
        'Oxytocin',
        'GOLDWING',
        'Lost Cause',
        'Halley\'s Comet',
        'Not My Responsibility',
        'OverHeated',
        'Everybody Dies',
        'Your Power',
        'NDA',
        'Therefore I Am',
        'Happier Than Ever',
        'Male Fantasy'
      ]
    },
    {
      id: 2,
      title: 'WHEN WE ALL FALL ASLEEP, WHERE DO WE GO?',
      cover: 'https://avatars.yandex.net/get-music-content/99892/0a911a32.a.7190880-1/m1000x1000',
      songs: [
        '!!!!!!!',
        'bad guy',
        'xanny',
        'you should see me in a crown',
        'all the good girls go to hell',
        'wish you were gay',
        'when the party\'s over',
        'my strange addiction',
        'bury a friend',
        'ilomilo',
        'listen before i go',
        'i love you',
        'goodbye'
      ]
    },
    {
      id: 3,
      title: 'dont smile at me',
      cover: 'https://avatars.yandex.net/get-music-content/98892/90ce450c.a.4923330-1/m1000x1000',
      songs: [
        'COPYCAT',
        'idontwannabeyouanymore',
        'my boy',
        'watch',
        'party favor',
        'bellyache',
        'ocean eyes',
        'hostage',
        '&burn'
      ]
    }
  ];

  return (
    <div className='outer-container'>
      {albumsData.map( (album) => 
        <AlbumCard imageUrl={album.cover} albumName={album.title} songs={album.songs}/>
)
      }

    </div>
  );
}

export default App;




function AlbumCard(props){
  const [isOpen, SetIsOpen] = useState(false);

  return (
    <div className="card-container">
      <img src={props.imageUrl}></img>
      <Button active onClick={() => SetIsOpen(!isOpen)}>{props.albumName}</Button>

      <div className={`songs-contanier ${isOpen ? "active" : ""}`}>
        {props.songs.map( (songname) =>
        <Card className='song-card' fluid >
          <Song songName={songname}/>
          </Card>
        )}
      </div>
    </div>
  );
}


function Song(props){

  return (
    <div className="songContainer">
      <p style={{marginLeft: '20px', fontSize: '20px'}}>{props.songName}</p>
    </div>
  );
}



