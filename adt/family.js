/**
 * Represents a family that lives in a household together.
 * A family always has at least one person in it.
 * Families are mutable.
 */
class Family {
  // the people in the family
  // public Set<Person> people;

  constructor() {
    this.people = [];
  }

  /**
   * @return a list containing all the members of the family, with no duplicates.
   */
  // public List<Person> getMembers() {
  //     return new ArrayList<>(people);
  // }

  getMembers() {
    return people;
  }
}

export { Family };
