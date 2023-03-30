import {IEntity} from "../Entity/Entity";

export const data: IEntity = {
    data: { title: 'Start', text: 'Start text', id: 'uid1' },
    points: [
        { data: { title: 'Second 1', text: 'Second text 1', id: 'uid2' },
            points: [
                { data: { title: 'Three 1', text: 'Three text 1', id: 'uid3' }, points: [] },
                { data: { title: 'Three 2', text: 'Three text 2', id: 'uid4' }, points: [] },
                { data: { title: 'Three 3', text: 'Three text 3', id: 'uid5' }, points: [] },
            ]
        },
        { data: { title: 'Second 2', text: 'Second text 2', id: 'uid6' },
            points: [
                { data: { title: 'Three 1', text: 'Three text 1', id: 'uid7' },
                    points: [
                        { data: { title: 'Four 1', text: 'Four text 1', id: 'uid8' }, points: [] },
                        { data: { title: 'Four 2', text: 'Four text 2', id: 'uid9' },
                            points: [
                                { data: { title: 'Five 1', text: 'Five text 1', id: 'uid10' }, points: [] },
                                { data: { title: 'Five 2', text: 'Five text 2', id: 'uid11' }, points: [] },
                                { data: { title: 'Five 3', text: 'Five text 3', id: 'uid12' },
                                    points: [
                                        { data: { title: 'Second 1', text: 'Second text 1', id: 'uid13' },
                                            points: [
                                                { data: { title: 'Three 1', text: 'Three text 1', id: 'uid14' }, points: [] },
                                                { data: { title: 'Three 2', text: 'Three text 2', id: 'uid15' }, points: [] },
                                                { data: { title: 'Three 3', text: 'Three text 3', id: 'uid16' }, points: [] },
                                            ]
                                        },
                                        { data: { title: 'Second 2', text: 'Second text 2', id: 'uid17' },
                                            points: [
                                                { data: { title: 'Three 1', text: 'Three text 1', id: 'uid18' },
                                                    points: [
                                                        { data: { title: 'Four 1', text: 'Four text 1', id: 'uid19' }, points: [] },
                                                        { data: { title: 'Four 2', text: 'Four text 2', id: 'uid20' },
                                                            points: [
                                                                { data: { title: 'Five 1', text: 'Five text 1', id: 'uid21' }, points: [] },
                                                                { data: { title: 'Five 2', text: 'Five text 2', id: 'uid22' }, points: [] },
                                                                { data: { title: 'Five 3', text: 'Five text 3', id: 'uid23' }, points: [] },
                                                                { data: { title: 'Five 4', text: 'Five text 4', id: 'uid24' }, points: [] },
                                                                { data: { title: 'Five 5', text: 'Five text 5', id: 'uid25' }, points: [] },
                                                            ]
                                                        },
                                                    ]
                                                },
                                                { data: { title: 'Three 2', text: 'Three text 2', id: 'uid26' }, points: [] },
                                            ]
                                        },
                                        { data: { title: 'Second 3', text: 'Second text 3', id: 'uid27' },
                                            points: [
                                                { data: { title: 'Three 1', text: 'Three text 1', id: 'uid28' }, points: [] },
                                                { data: { title: 'Three 2', text: 'Three text 2', id: 'uid29' },
                                                    points: [
                                                        { data: { title: 'Four 1', text: 'Four text 1', id: 'uid30' }, points: [] },
                                                        { data: { title: 'Four 2', text: 'Four text 2', id: 'uid31' }, points: [] },
                                                    ]
                                                },
                                                { data: { title: 'Three 3', text: 'Three text 3', id: 'uid32' }, points: [] },
                                            ]
                                        },
                                    ]
                                },
                                { data: { title: 'Five 4', text: 'Five text 4', id: 'uid33' }, points: [] },
                                { data: { title: 'Five 5', text: 'Five text 5', id: 'uid34' }, points: [] },
                            ]
                        },
                    ]
                },
                { data: { title: 'Three 2', text: 'Three text 2', id: 'uid35' }, points: [] },
            ]
        },
        { data: { title: 'Second 3', text: 'Second text 3', id: 'uid36' },
            points: [
                { data: { title: 'Three 1', text: 'Three text 1', id: 'uid37' }, points: [] },
                { data: { title: 'Three 2', text: 'Three text 2', id: 'uid38' },
                    points: [
                        { data: { title: 'Four 1', text: 'Four text 1', id: 'uid39' }, points: [] },
                        { data: { title: 'Four 2', text: 'Four text 2', id: 'uid40' }, points: [] },
                    ]
                },
                { data: { title: 'Three 3', text: 'Three text 3', id: 'uid41' }, points: [] },
            ]
        },
    ]
}