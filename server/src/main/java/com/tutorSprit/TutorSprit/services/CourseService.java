package com.tutorSprit.TutorSprit.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.tutorSprit.TutorSprit.dto.ChapterDto;
import com.tutorSprit.TutorSprit.dto.ChoiceDto;
import com.tutorSprit.TutorSprit.dto.CourseDto;
import com.tutorSprit.TutorSprit.dto.QuestionDto;
import com.tutorSprit.TutorSprit.dto.SubChapterDto;
import com.tutorSprit.TutorSprit.entities.Chapter;
import com.tutorSprit.TutorSprit.entities.Choice;
import com.tutorSprit.TutorSprit.entities.Course;
import com.tutorSprit.TutorSprit.entities.Exam;
import com.tutorSprit.TutorSprit.entities.Question;
import com.tutorSprit.TutorSprit.entities.SubChapter;
import com.tutorSprit.TutorSprit.mappers.ChapterMapper;
import com.tutorSprit.TutorSprit.mappers.ChoiceMapper;
import com.tutorSprit.TutorSprit.mappers.CourseMapper;
import com.tutorSprit.TutorSprit.mappers.QuestionMapper;
import com.tutorSprit.TutorSprit.mappers.SubChapterMapper;
import com.tutorSprit.TutorSprit.repository.ChapterRepository;
import com.tutorSprit.TutorSprit.repository.ChoiceRepository;
import com.tutorSprit.TutorSprit.repository.CourseRepository;
import com.tutorSprit.TutorSprit.repository.QuestionRepository;
import com.tutorSprit.TutorSprit.repository.SubChapterRepository;
import com.tutorSprit.TutorSprit.requests.AddChapterRequest;
import com.tutorSprit.TutorSprit.requests.AddChoiceRequest;
import com.tutorSprit.TutorSprit.requests.AddQuestionRequest;
import com.tutorSprit.TutorSprit.requests.AddSubChapterRequest;
import com.tutorSprit.TutorSprit.requests.CourseRequest;
import com.tutorSprit.TutorSprit.requests.UpdateChapterRequest;
import com.tutorSprit.TutorSprit.requests.UpdateChoiceRequest;
import com.tutorSprit.TutorSprit.requests.UpdateQuestionRequest;
import com.tutorSprit.TutorSprit.requests.UpdateSubChapterRequest;

@Service
public class CourseService {
	
	@Autowired
	CourseRepository courseRepository;
	@Autowired
	ChapterRepository chapterRepository;
	@Autowired
	SubChapterRepository subChapterRepository;
	@Autowired
	QuestionRepository questionRepository;
	@Autowired
	ChoiceRepository choiceRepository;
	
	
	@Autowired
	CourseMapper courseMapper;
	@Autowired
	ChapterMapper chapterMapper;
	@Autowired
	SubChapterMapper subChapterMapper;
	@Autowired
	QuestionMapper questionMapper;
	@Autowired
	ChoiceMapper choiceMapper;



	
	//---------------   Course   ---------------//
	
	public CourseDto addCourse(CourseRequest courseRequest) {
		Course course = courseRepository.save(courseMapper.toCourse(courseRequest));
		return courseMapper.toCourseDto(course);
	}
	
	public List<CourseDto> readAllCourse() {
		List<Course> courseList = courseRepository.findAll();
		
		return courseMapper.toCourseDtoList(courseList);
	}
	
	public CourseDto readCourseByCourseId(long id) {
		Optional<Course> course = courseRepository.findById(id);
		if (course.isPresent()) {
			return courseMapper.toCourseDto(course.get());
		}
		return null;
	}
	
	public CourseDto updateCourse(long id,CourseRequest courseRequest) {
		Optional<Course> course = courseRepository.findById(id);
		if(course.isPresent()) {
			Course updatedCourse = courseRepository.save(courseMapper.toCourseUpdate(course.get(), courseRequest));
			return courseMapper.toCourseDto(updatedCourse);
		}
		return null;
	}
	
	public void deleteCourse(long id) {
		courseRepository.deleteById(id);
		
	}

	//---------------   Chapter   ---------------//

	public ChapterDto addChapter(AddChapterRequest addChapterRequest) {
		
		Chapter chapter = chapterMapper.toChapter(addChapterRequest);
		Optional<Course> course = courseRepository.findById(addChapterRequest.getCourseId());
		if (course.isPresent()) {
			chapter.setCourse(course.get());
		}
		return chapterMapper.toChapterDto(chapterRepository.save(chapter));
		
	}

	public List<ChapterDto> readAllChapter() {
		List<Chapter> chapterList = chapterRepository.findAll();
		return chapterMapper.toChapterDtoList(chapterList);
	}

	public ChapterDto readChapterByChapterId(long id) {
		Optional<Chapter> chapter = chapterRepository.findById(id);
		if (chapter.isPresent()) {
			return chapterMapper.toChapterDto(chapter.get());
		}
		return null;
	}
	
	public ChapterDto updateChapter(Long id,UpdateChapterRequest updateChapterRequest) {
		Optional<Chapter> chapter = chapterRepository.findById(id);
		if(chapter.isPresent()) {
			Chapter updatedChapter = chapterRepository.save(chapterMapper.toChapterUpdate(chapter.get(),updateChapterRequest));
			return chapterMapper.toChapterDto(updatedChapter);
		}
		return null;
	}
	
	public void deleteChapter(long id) {
		chapterRepository.deleteById(id);
		
	}
	
	//---------------   SubChapter   ---------------//
	
	public SubChapterDto addSubChapter(AddSubChapterRequest addSubChapterRequest) {
		
		SubChapter subChapter = subChapterMapper.toSubChapter(addSubChapterRequest);
		Optional<Chapter> chapter = chapterRepository.findById(addSubChapterRequest.getChapterId());
		if (chapter.isPresent()) {
			subChapter.setChapter(chapter.get());
		}
		return subChapterMapper.toSubChapterDto(subChapterRepository.save(subChapter));
		
		
	}

	public List<SubChapterDto> readAllSubChapter() {
		List<SubChapter> subChapterList = subChapterRepository.findAll();
		return subChapterMapper.toSubChapterDtoList(subChapterList);
	}

	public SubChapterDto readSubChapterBySubChapterId(long id) {
		Optional<SubChapter> subChapter = subChapterRepository.findById(id);
		if (subChapter.isPresent()) {
			return subChapterMapper.toSubChapterDto(subChapter.get());
		}
		return null;
	}
	
	public SubChapterDto updateSubChapter(long id,UpdateSubChapterRequest updateSubChapterRequest) {
		Optional<SubChapter> subChapter = subChapterRepository.findById(id);
		if(subChapter.isPresent()) {
			SubChapter updatedSubChapter = subChapterRepository.save(subChapterMapper.toSubChapterUpdate(subChapter.get(), updateSubChapterRequest));
			return subChapterMapper.toSubChapterDto(updatedSubChapter);
		}
		return null;
	}

	public void deleteSubChapter(long id) {
		subChapterRepository.deleteById(id);
	}
	
	//---------------   Question   ---------------//
	
	public QuestionDto addQuestion(AddQuestionRequest addQuestionRequest) {
		Question question = questionMapper.toQuestion(addQuestionRequest);
		Optional<SubChapter> subChapter = subChapterRepository.findById(addQuestionRequest.getSubChapterId());
		if(subChapter.isPresent()) {
			question.setSubChapter(subChapter.get());
		}
		return questionMapper.toQuestionDto(questionRepository.save(question));
	}

	public List<QuestionDto> readAllQuestion() {
		List<Question> questionList = questionRepository.findAll();
		return questionMapper.toQuestionDtoList(questionList);
	}

	public QuestionDto readQuestionByQuestionId(long id) {
		Optional<Question> question = questionRepository.findById(id);
		if(question.isPresent()) {
			return questionMapper.toQuestionDto(question.get());
		}
		return null;
	}

	public QuestionDto updateQuestion(long id,UpdateQuestionRequest updateQuestionRequest) {
		Optional<Question> question = questionRepository.findById(id);
		if(question.isPresent()) {
			Question updatedQuestion = questionRepository.save(questionMapper.toQuestionUpdate(question.get(), updateQuestionRequest));
			return questionMapper.toQuestionDto(updatedQuestion);
		}
		return null;
	}
	
	public void deleteQuestion(long id) {
		Optional<Question> question = questionRepository.findById(id);
		if(question.isPresent()) {
			List<Exam> examList = question.get().getExams();
			for (int i = 0 ; i < examList.size() ; i++) {
				examList.get(i).deleteQuestion(question.get());
				question.get().deleteExam(examList.get(i));
			}
		}
		questionRepository.deleteById(id);
	}

	//---------------   Choice   ---------------//

	public ChoiceDto addChoice(AddChoiceRequest addChoiceRequest) {
		Choice choice = choiceMapper.toChoice(addChoiceRequest);
		Optional<Question> question = questionRepository.findById(addChoiceRequest.getQuestionId());
		if(question.isPresent()) {
			choice.setQuestion(question.get());
		}
		return choiceMapper.toChoiceDto(choiceRepository.save(choice));
	}

	public List<ChoiceDto> readAllChoice() {
		List<Choice> choiceList = choiceRepository.findAll();
		return choiceMapper.toChoiceDtoList(choiceList);
	}

	public ChoiceDto readChoiceByChoiceId(long id) {
		Optional<Choice> choice = choiceRepository.findById(id);
		if(choice.isPresent()) {
			return choiceMapper.toChoiceDto(choice.get());
		}
		return null;
	}

	public ChoiceDto updateChoice(long id,UpdateChoiceRequest updateChoiceRequest) {
		Optional<Choice> choice = choiceRepository.findById(id);
		if(choice.isPresent()) {
			Choice updatedChoice = choiceRepository.save(choiceMapper.toChoiceUpdate(choice.get(), updateChoiceRequest));
			return choiceMapper.toChoiceDto(updatedChoice);
		}
		return null;
	}

	public void deleteChoice(long id) {
		choiceRepository.deleteById(id);
	}



}
