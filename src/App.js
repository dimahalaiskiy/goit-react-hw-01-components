import Profile from './Components/Profile/Profile';
import Statistics from './Components/Statistics/Statistics';
import FriendsList from './Components/FriendsList/FriendsList';
import TransactionHistory from './Components/TransactionHistory/TransactionHistory';

import userData from './Data/user.json';
import statisticsData from './Data/stats.json';
import friendsData from './Data/friends.json';
import transactionsData from './Data/transactions.json';

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
			<TransactionHistory transactions={transactionsData} />
		</>
	);
};

export default App;
