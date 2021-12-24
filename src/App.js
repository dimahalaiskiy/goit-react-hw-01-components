import Profile from './Components/Profile/Profile';
import Statistics from './Components/Statistics/Statistics';
import FriendsList from './Components/FriendsList/FriendsList';

import userData from './Data/user.json';
import statisticsData from './Data/stats.json';
import friendsData from './Data/friends.json';

const App = () => {
	return (
		<>
			<Profile
				username={userData.username}
				tag={userData.tag}
				location={userData.location}
				avatar={userData.avatar}
				stats={userData.stats}
			/>
			<Statistics title='Upload stats' stats={statisticsData} />
			<FriendsList friends={friendsData} />
		</>
	);
};

export default App;
