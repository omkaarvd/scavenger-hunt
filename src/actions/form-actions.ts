import { updateScore } from './api-actions';
import { clue_data, team_data } from './data';

export const onFormSubmit = (data: FormData, id: string) => {
  const team_name = data.get('team_name');
  const team_code = data.get('team_code');

  const clue_datum = clue_data.find((datum) => datum.id === id);
  const team_group = team_data[team_name as keyof typeof team_data];

  // if team name is not matched
  if (team_group === undefined) {
    localStorage.clear();
    localStorage.setItem('team_message', 'Wrong team name!');
    window.location.replace('/clue');
    return;
  }

  // if team group is not matched
  if (
    clue_datum?.group_name !== team_group &&
    clue_datum?.question_no !== '5' &&
    clue_datum?.question_no !== '6'
  ) {
    localStorage.clear();
    localStorage.setItem(
      'group_message',
      'This clue belongs to another group!'
    );
    window.location.replace('/clue');
    return;
  }

  // if team code is not matched
  if (clue_datum?.code !== team_code) {
    localStorage.clear();
    localStorage.setItem('team_code_umatched', 'Code not matched!');
    window.location.replace('/clue');
    return;
  }

  if (clue_datum?.question_no === '5' || clue_datum?.question_no === '6') {
    localStorage.clear();
    localStorage.setItem('clue', clue_datum.clue);
    localStorage.setItem('next_code', clue_datum.next_code);
    // update score
    updateScore(team_name as string, clue_datum.question_no);
    window.location.replace('/clue');
    return;
  }

  // if team code and group name is matched
  if (clue_datum?.code === team_code && clue_datum?.group_name === team_group) {
    localStorage.clear();
    localStorage.setItem('clue', clue_datum.clue);
    localStorage.setItem('next_code', clue_datum.next_code);
    // update score
    updateScore(team_name as string, clue_datum.question_no);
    window.location.replace('/clue');
    return;
  }
};
