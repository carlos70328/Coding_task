export const getRepos = async (user) => {
	const url = `https://api.github.com/users/${encodeURI(user)}/repos`;
	const resp = await fetch(url);
	const data = await resp.json();
		
	if (data === null){
		return 
	}

	const listRepo = data.map((data) => {
		return {
			id: data.id,
			name: data.name,
			description: data.description,
			img: data.owner.avatar_url
		};
	});

	
	return listRepo;
};
