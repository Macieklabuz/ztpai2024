import React, { useState } from 'react';
import styled from 'styled-components';
import NavigationBar from '../components/NavigationBar';
import BottomBar from '../components/BottomBar';
import { Calendar } from 'react-calendar'; // Import kalendarza

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 90.5vh;
`;

const CalendarContainer = styled.div`
    width: 300px;
`;

const AgendaPage = () => {
    const [agendaTasks, setAgendaTasks] = useState([]);
    const [selectedDate, setSelectedDate] = useState(new Date()); // Dodany stan wybranej daty

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <>
            <NavigationBar />
            <PageContainer>
                {/* Usunięty lub zakomentowany komponent AgendaForm */}
                {/* <AgendaForm onSubmit={handleSubmitTask} /> */}
                <CalendarContainer>
                    <Calendar value={selectedDate} onChange={handleDateChange} />
                </CalendarContainer>
                <div>
                    <h2>Agenda Tasks</h2>
                    <ul>
                        {agendaTasks.map((task, index) => (
                            <li key={index}>
                                <strong>{task.task}</strong> - {task.date}
                            </li>
                        ))}
                    </ul>
                </div>
            </PageContainer>
            <BottomBar />
        </>
    );
};

export default AgendaPage;
