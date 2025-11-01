function solution(name, yearning, photo) {
    const score = new Map();
    
    for (let i = 0; i < name.length; i++) {
        score.set(name[i], yearning[i]);
    }
    
    return photo.map(group =>
        group.reduce((sum, person) => sum + (score.get(person) || 0), 0)
      );
    

}