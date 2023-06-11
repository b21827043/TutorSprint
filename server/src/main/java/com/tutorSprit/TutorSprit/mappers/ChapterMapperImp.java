package com.tutorSprit.TutorSprit.mappers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.tutorSprit.TutorSprit.dto.ChapterDto;
import com.tutorSprit.TutorSprit.dto.StudentAnalysisChapterDto;
import com.tutorSprit.TutorSprit.entities.Chapter;
import com.tutorSprit.TutorSprit.requests.AddChapterRequest;
import com.tutorSprit.TutorSprit.requests.UpdateChapterRequest;

@Component
public class ChapterMapperImp implements ChapterMapper{
	
	@Autowired
	SubChapterMapper subChapterMapper;
	
	
	@Override
	public Chapter toChapter(AddChapterRequest addChapterRequest) {
		return new Chapter(addChapterRequest.getChapterName(),addChapterRequest.getChapterIntroText());
	}

	@Override
	public ChapterDto toChapterDto(Chapter chapter) {
		return new ChapterDto(chapter.getChapterId(),chapter.getChapterName(),chapter.getChapterIntroText(),subChapterMapper.toSubChapterDtoList(chapter.getSubChapters()));
	}

	@Override
	public List<ChapterDto> toChapterDtoList(List<Chapter> chapterList) {
		List<ChapterDto> chapterDtoList = new ArrayList<ChapterDto>();
		if (chapterList == null) {
			return chapterDtoList;
		}
		for (int i = 0 ; i<chapterList.size();i++) {
			ChapterDto chapterDto = toChapterDto(chapterList.get(i));
			chapterDtoList.add(chapterDto);
		}
		return chapterDtoList;
	}

	@Override
	public Chapter toChapterUpdate(Chapter chapter, UpdateChapterRequest updateChapterRequest) {
		return new Chapter(chapter.getChapterId(),updateChapterRequest.getChapterName(),updateChapterRequest.getChapterIntroText(),chapter.getCourse(),chapter.getSubChapters());
	}

	@Override
	public StudentAnalysisChapterDto toStudentAnalysisChapterDto(Chapter chapter) {
		return new StudentAnalysisChapterDto(chapter.getChapterId(),chapter.getChapterName(),chapter.getChapterIntroText(),subChapterMapper.toStudentAnalysisSubChapterDtoList(chapter.getSubChapters()));
	}

	@Override
	public List<StudentAnalysisChapterDto> toStudentAnalysisChapterDtoList(List<Chapter> chapter) {
		List<StudentAnalysisChapterDto> studentAnalysisChapterDtoList = new ArrayList<StudentAnalysisChapterDto>();
		if ( chapter == null) {
			return studentAnalysisChapterDtoList;
		}
		for (int i = 0 ; i < chapter.size() ; i++) {
			StudentAnalysisChapterDto studentAnalysisChapterDto = toStudentAnalysisChapterDto(chapter.get(i));
			studentAnalysisChapterDtoList.add(studentAnalysisChapterDto);
		}
		return studentAnalysisChapterDtoList;
	}



}
